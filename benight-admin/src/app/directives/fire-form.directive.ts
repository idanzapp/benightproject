import { Directive, Input, Output, EventEmitter, HostListener, OnInit, OnDestroy } from '@angular/core'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { FormGroup } from '@angular/forms'
import { tap,  take, debounceTime } from 'rxjs/operators'
import { Subscription } from 'rxjs'
import { FirestoreAdminService, FirestoreEventService, FirestoreTicketService } from '@bn8-services/db-extension.service'

@Directive({
  selector: '[fireForm]'
})
export class FireFormDirective implements OnInit, OnDestroy {

  // Inputs
  @Input() path: string
  @Input() formGroup: FormGroup
  @Input() dbRef: string

  // Internal state
  private _state: 'loading' | 'synced' | 'modified' | 'error'

  // Outputs
  @Output() stateChange = new EventEmitter<string>()
  @Output() formError = new EventEmitter<string>()

  // Firestore Document
  private docRef: AngularFirestoreDocument

  // Subscriptions
  private formSub: Subscription
  //Firestore  
  constructor(
    private afs: AngularFirestore,
    private afsAdmin: FirestoreAdminService,
    private afsTicket: FirestoreTicketService,
    private afsEvent: FirestoreEventService,
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
      debounceTime(2000),
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
  onSubmit(e) {
    this.setDoc()
  }


  // Determines if path is a collection or document
  getDocRef(): any {    
    let store
    if  (this.dbRef) 
      switch (this.dbRef) {
        case 'admin':
          store = this.afsAdmin
          break
        case 'ticket':
          store = this.afsTicket
          break
        case 'event':
          store = this.afsEvent
          break    
        default:
          store = this.afs
          break
      }
    else  
      store = this.afs  

    if (this.path.split('/').length % 2) {
      return store.doc(`${this.path}/${this.afs.createId()}`)
    } else {
      return store.doc(this.path)
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
  set state(val) {
    this._state = val
    this.stateChange.emit(val)
  }

  ngOnDestroy() {
    this.formSub.unsubscribe()
  }
}