import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ModalController } from '@ionic/angular'
import { PreviewPlanesPage } from '@bn8-imports/imports.previews' 
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { ActivatedRoute, Router } from '@angular/router' 
import { ToastController } from '@ionic/angular'

import { Observable, of } from 'rxjs'
import { tap, debounceTime, take, map } from 'rxjs/operators'
@Component({
  selector: 'detalle-detalle-info-plan',
  templateUrl: './detalle-info-plan.page.html',
  styleUrls: ['./detalle-info-plan.page.scss'],
})
export class DetalleInfoPlanPage implements OnInit {

  myForm: FormGroup = {} as FormGroup  
  private plan$: Observable<any> = of(null)
  private state: 'loading' | 'synced' | 'modified' | 'error' = 'loading'
  private id: string
  private check:boolean = false
  private basehref:string = ''

  constructor(private feed: DataFeedService, 
    private modal: ModalController, 
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
    this.plan$ = await this.feed.get(database.literal.locations,this.id)
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
            this.feed.save(database.literal.locations,{uid:this.id,...this.myForm.value})  
          this.state = 'synced'         
          this.presentToast('Sincronizado', 'success')
        }
      })
    )
    .subscribe()
  }

  onSubmit(e:any) {
    if (this.myForm.valid && this.state ==='modified') {
      this.feed.save(database.literal.locations,{uid:this.id,...e})    
      this.state = 'synced'
      this.presentToast('Sincronizado', 'success')
    } else 
      if(!this.myForm.valid)
        this.presentToast('Los datos no son validos', 'danger')
  }
  
  delete() {
    //check if it can be deleted
    if (this.check)      
      this.feed.remove(database.literal.locations, this.id)
    else
      this.presentToast('El Plan no puede ser eliminado', 'danger')
  }

  goto(url){
    this.router.navigate([`${this.basehref}${url}`,this.id])
  }

  async presentModal() {
    const window = await this.modal.create({
      component: PreviewPlanesPage,
      componentProps: { id: this.id }
    })
    return await window.present()
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