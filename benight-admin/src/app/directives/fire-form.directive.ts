import { Directive, Input, Output, EventEmitter, HostListener, OnInit, OnDestroy } from '@angular/core'
import { AngularFirestoreDocument } from '@angular/fire/firestore'
import { FormGroup } from '@angular/forms'
import { tap,  take, debounceTime } from 'rxjs/operators'
import { Subscription } from 'rxjs'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'

@Directive({
  selector: '[fireForm]'
})
export class FireFormDirective implements OnInit, OnDestroy {

  // Inputs
  @Input() path: string = ''
  @Input() formGroup: FormGroup = {} as FormGroup
  @Input() dbRef: string = ''

  // Internal state
  private _state: 'loading' | 'synced' | 'modified' | 'error' = 'loading'

  // Outputs
  @Output() stateChange = new EventEmitter<string>()
  @Output() formError = new EventEmitter<string>()

  // Firestore Document
  private docRef: AngularFirestoreDocument = {} as AngularFirestoreDocument

  // Subscriptions
  private formSub: Subscription = new Subscription()
  //Firestore  
  constructor(
    private afs: FirebaseClient
    ) { }

  ngOnInit() {
    this.preloadData()
    this.autoSave()
  }

  // Loads initial form data from Firestore
  preloadData() {
    this.state = 'loading'
    this.docRef = this.getDocRef()
    this.docRef
      .valueChanges()
      .pipe(
        tap(doc => {
          if (doc) {
            this.formGroup.patchValue(doc)
            this.formGroup.markAsPristine()
            this.state = 'synced'
          }
        }),
        take(1)
      )
      .subscribe()
  }
  
  // Autosaves form changes
  autoSave() {
    this.formSub = this.formGroup.valueChanges
    .pipe(
      tap(change => {
        this.state = 'modified'
      }),
      debounceTime(5000),
      tap(change => {
        if (this.formGroup.valid && this._state === 'modified') {
          this.setDoc()
        }
      })
    )
    .subscribe()
  }

  // Intercept form submissions to perform the document write
  @HostListener('ngSubmit', ['$event'])
  onSubmit(e:any) {
    this.setDoc()
  }


  // Determines if path is a collection or document
  getDocRef(): any {    
    let store = this.dbRef ? this.dbRef : database.DB_CON_LOGIN
    if (this.path.split('/').length % 2) {
      return this.afs.doc$(`${this.path}/${this.afs.createId(store)}`,store)
    } else {
      return this.afs.doc$(this.path)
    }
  }

  // Writes changes to Firestore
  async setDoc() {
    try {
      await this.docRef.set(this.formGroup.value, { merge: true })
      this.state = 'synced'
    } catch (err) {
      console.log(err)
      this.formError.emit(err.message)
      this.state = 'error'
    }
  }
  
  // Setter for state changes
  set state(val:any) {
    this._state = val
    this.stateChange.emit(val)
  }

  ngOnDestroy() {
    this.formSub.unsubscribe()
  }
}