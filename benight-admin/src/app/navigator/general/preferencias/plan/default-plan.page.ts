import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { ActivatedRoute, Router } from '@angular/router' 
import { ToastController } from '@ionic/angular'

import { Observable, of } from 'rxjs'
import { tap, debounceTime, take, map } from 'rxjs/operators'
@Component({
  selector: 'preferences-default-plan',
  templateUrl: './default-plan.page.html',
  styleUrls: ['./default-plan.page.scss'],
})
export class DefaultPlanPage implements OnInit {

  myForm: FormGroup = {} as FormGroup  
  private plan$: Observable<any> = of(null)
  private state: 'loading' | 'synced' | 'modified' | 'error' = 'loading'
  private id: string
  private basehref:string = ''

  constructor(private feed: DataFeedService, 
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public toastController: ToastController) {} 

  ngOnInit() {
    let actualDate = new Date().toISOString()
    this.myForm = this.fb.group({
      activateCountdown: [false],
      date: [actualDate],
      description:[''],
      duration:[180],
      enableList:[false],
      enableEvent:[false],
      eventPhotoURL:[''],
      free:[false],
      gaugin:[0],
      headerPhotoURL:[''],
      interval:[''],
      isPrivate:[false],
      maxAge:[0],
      minAge:[0],
      name: [''],
      nextDate: [actualDate]
      })        
    this.preloadData()
    this.autoSave()
  }

  async preloadData() {
    await this.route.params.pipe(map(p => p.id)).subscribe(e => this.id = e)
    this.state = 'loading'
    this.plan$ = await this.feed.getField(database.literal.default, {field: database.list.default.plan})
    this.plan$
      .pipe(
        tap(doc => {
          if (doc) {
            let data = {             
              activateCountdown: doc.activateCountdown ,
              description: doc.description ,
              duration: doc.duration ,
              enableEvent: doc.enableEvent ,
              enableList: doc.enableList ,
              eventPhotoURL: doc.eventPhotoURL,
              free: doc.free ,
              gaugin: doc.gaugin ,
              headerPhotoURL: doc.headerPhotoURL ,
              date: doc.date ,
              interval: doc.interval ,
              isPrivate: doc.isPrivate ,
              maxAge: doc.maxAge ,
              minAge: doc.minAge ,
              name: doc.name ,
              nextDate: doc.nextDate 
            }
            this.myForm.patchValue(data)
            this.myForm.markAsPristine()
            this.state = 'synced' 
          }
        }),
        take(1)
      )
      .subscribe()
    let route = this.router.url.slice(0, this.router.url.lastIndexOf('/'))
    this.basehref = this.router.url.slice(0, route.lastIndexOf('/'))
  }

  autoSave() {
    this.myForm.valueChanges
    .pipe(
      tap(change => this.state = 'modified'),
      debounceTime(5000),
      tap(change => {
          if (this.myForm.valid && this.state === 'modified') {          
            this.feed.save(database.literal.default,{field: database.list.default.plan, ...this.myForm.value})  
          this.state = 'synced'         
          this.presentToast('Sincronizado', 'success')
        }
      })
    )
    .subscribe()
  }

  onSubmit(e:any) {
    if (this.myForm.valid && this.state ==='modified') {
      this.feed.save(database.literal.default,{field: database.list.default.plan, ...e})    
      this.state = 'synced'
      this.presentToast('Sincronizado', 'success')
    } else 
      if(!this.myForm.valid)
        this.presentToast('Los datos no son validos', 'danger')
  }

  goto(url){
    this.router.navigate([`${this.basehref}${url}`,this.id])
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