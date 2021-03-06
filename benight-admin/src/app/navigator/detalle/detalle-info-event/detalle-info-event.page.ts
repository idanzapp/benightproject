import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ModalController } from '@ionic/angular'
import { PreviewEventosPage } from '@bn8-imports/imports.previews' 
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { ActivatedRoute, Router } from '@angular/router' 
import { ToastController } from '@ionic/angular'
import { SearchItemsPage } from '@bn8-imports/imports.previews'

import { Observable, of } from 'rxjs'
import { tap, debounceTime, take, map } from 'rxjs/operators'
@Component({
  selector: 'detalle-detalle-info-event',
  templateUrl: './detalle-info-event.page.html',
  styleUrls: ['./detalle-info-event.page.scss'],
})
export class DetalleInfoEventPage implements OnInit {

  myForm: FormGroup = {} as FormGroup  
  private event$: Observable<any> = of(null)
  private state: 'loading' | 'synced' | 'modified' | 'error' = 'loading'
  private id: string
  private check:boolean = false
  private basehref:string = ''

  charged: boolean = false
  list = {
    locationList: [],
    ticketList: [],
    dateList: [],
    listList: [],
    ownerList: [],
    rulesList: [],
    requisiteList: [],
    tagList: [],
    gallery: []
  }

  names = {
    locationList: 'localizacion',
    ticketList: 'entrada',
    dateList: 'fecha',
    listList: 'lista',
    ownerList: 'propietario',
    rulesList: 'regla',
    requisiteList: 'requisito',
    tagList: 'tag',
    gallery: 'foto'
  }

  literals = {
    locationList: database.literal.locations,
    ticketList: database.literal.tickets,
    dateList: database.literal.dates,
    listList: database.literal.lists,
    ownerList: database.literal.admins,
    rulesList: 'none',
    requisiteList: database.literal.requirements,
    tagList: database.literal.tags,
    gallery: database.literal.gallery
  }

  show = [true,false,false,false,false,false,false,false,false,false]

  constructor(private feed: DataFeedService, 
    private modal: ModalController, 
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public toastController: ToastController) {} 

  hide(index:number) {
    this.show[index] = !this.show[index]
  }

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
    this.event$ = await this.feed.get(database.literal.events,this.id)
    this.charged = true
    this.event$
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
            this.list =  {            
              locationList: doc.locationList,
              ticketList: doc.ticketList,
              dateList: doc.dateList,
              listList: doc.listList,
              ownerList: doc.ownerList,
              rulesList: doc.rulesList,
              requisiteList: doc.requisiteList,
              tagList: doc.tagList,
              gallery: doc.gallery
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
            this.feed.save(database.literal.events,{uid:this.id,...this.myForm.value})  
          this.state = 'synced'         
          this.presentToast('Sincronizado', 'success')
        }
      })
    )
    .subscribe()
  }

  onSubmit(e:any) {
    if (this.myForm.valid && this.state ==='modified') {
      this.feed.save(database.literal.events,{uid:this.id,...e})    
      this.state = 'synced'
      this.presentToast('Sincronizado', 'success')
    } else 
      if(!this.myForm.valid)
        this.presentToast('Los datos no son validos', 'danger')
  }
  
  delete() {
    //check if it can be deleted
    if (this.check)      
      this.feed.remove(database.literal.events, this.id)
    else
      this.presentToast('El Evento no puede ser eliminado', 'danger')
  }

  goto(url){
    this.router.navigate([`${this.basehref}${url}`,this.id])
  }

  async presentModal() {
    const window = await this.modal.create({
      component: PreviewEventosPage,
      componentProps: { id: this.id }
    })
    return await window.present()
  }

  async searchItem(literal) {
    if (literal != 'none') {
      const window = await this.modal.create({
        component: SearchItemsPage,
        componentProps: { search: literal }
      })
      return await window.present()
    }
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