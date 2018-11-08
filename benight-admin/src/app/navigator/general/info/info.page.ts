import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { AuthService } from '@bn8-services/auth.service'
import { FormBuilder, FormGroup } from '@angular/forms'

import { Observable } from 'rxjs'
import { tap, debounceTime, take } from 'rxjs/operators'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
@Component({
  selector: 'general-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit{

  user$: Observable<any>
  myForm: FormGroup = {} as FormGroup
  private state: 'loading' | 'synced' | 'modified' | 'error' = 'loading'
  private uid: string
  // Outputs
  @Output() stateChange = new EventEmitter<string>()
  @Output() formError = new EventEmitter<string>()

  constructor(private fireclient: FirebaseClient, private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      displayName: [''],
      paymentAccount:[''],
      appear:[false] 
    })
    this.getUid()
    this.preloadData()
    this.autoSave()
  } 

  async getUid() {
    this.uid = await this.auth.uid().toPromise()
  }

  preloadData() {
    this.state = 'loading'
    this.user$ = this.auth.user()
    this.user$
      .pipe(
        tap(doc => {
          if (doc) {
            let data = {
              displayName: doc.displayName,
              paymentAccount: doc.paymentAccount,
              appear: doc.appear
            }
            this.myForm.patchValue(data)
            this.myForm.markAsPristine()
            this.state = 'synced'
          }
        }),
        take(1)
      )
      .subscribe()
  }

  autoSave() {
    this.myForm.valueChanges
    .pipe(
      tap(change => {
        this.state = 'modified'
      }),
      debounceTime(5000),
      tap(change => {
        if (this.myForm.valid && this.state === 'modified') {
          let adminValue = {displayName: this.myForm.value.displayName,paymentAccount: this.myForm.value.paymentAccount}
          let userValue = {appear: this.myForm.value.appear}
          this.setDoc(`${database.tableNames.admins}/${this.uid}`,adminValue)
          this.setDoc(`${database.tableNames.users}/${this.uid}`,userValue)
        }
      })
    )
    .subscribe()
  }

  onSubmit(e:any) {
    let adminValue = {displayName: e.displayName,paymentAccount: e.paymentAccount}
    let userValue = {appear: e.appear}
    this.setDoc(`${database.tableNames.admins}/${this.uid}`,adminValue)
    this.setDoc(`${database.tableNames.users}/${this.uid}`,userValue)
  }

  async setDoc(path,data) {
    try {
      await this.fireclient.updateAt(path,data)
      this.state = 'synced'
    } catch (err) {
      console.log(err)
      this.formError.emit(err.message)
      this.state = 'error'
    }
  }
}