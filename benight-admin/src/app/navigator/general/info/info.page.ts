import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms' 
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { ToastController } from '@ionic/angular'

import { Observable, of } from 'rxjs'
import { tap, debounceTime, take} from 'rxjs/operators'
@Component({
  selector: 'general-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  myForm: FormGroup = {} as FormGroup  
  private info$: Observable<any> = of(null)
  private state: 'loading' | 'synced' | 'modified' | 'error' = 'loading'
  private id: string = ''

  constructor(private feed: DataFeedService, 
    private fb: FormBuilder,
    public toastController: ToastController) {} 

  ngOnInit() {
    this.myForm = this.fb.group({
      displayName: [''],
      paymentAccount:[''],
      appear:[false] 
      })        
    this.preloadData()
    this.autoSave()
  }

  async preloadData() {
    this.state = 'loading'
    this.info$ = await this.feed.fetch(database.literal.info)
    this.info$
      .pipe(
        tap(doc => {
          this.id = doc.uid
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
      ).subscribe()
  }

  autoSave() {
    this.myForm.valueChanges
    .pipe(
      tap(change => this.state = 'modified'),
      debounceTime(5000),
      tap(change => {
          if (this.myForm.valid && this.state === 'modified') {          
            this.feed.save(database.literal.info,{uid:this.id,...this.myForm.value})  
          this.state = 'synced'         
          this.presentToast('Sincronizado', 'success')
        }
      })
    )
    .subscribe()
  }

  onSubmit(e:any) {
    if (this.myForm.valid && this.state ==='modified') {
      this.feed.save(database.literal.info,{uid:this.id,...e})    
      this.state = 'synced'
      this.presentToast('Sincronizado', 'success')
    } else 
      if(!this.myForm.valid)
        this.presentToast('Los datos no son validos', 'danger')
  }

  private async presentToast(message,color) {
    const toast = await this.toastController.create({
      message: message,
      position: 'top',
      duration: 2000,
      color
    })
    toast.present()
  }
}