import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ModalController } from '@ionic/angular'
import { PreviewClubPage } from '@bn8-imports/imports.previews' 
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { ActivatedRoute, Router } from '@angular/router' 
import { ToastController } from '@ionic/angular'

import { Observable, of } from 'rxjs'
import { tap, debounceTime, take, map } from 'rxjs/operators'
@Component({
  selector: 'detalle-detalle-info-club',
  templateUrl: './detalle-info-club.page.html',
  styleUrls: ['./detalle-info-club.page.scss'],
})
export class DetalleInfoClubPage implements OnInit {

  myForm: FormGroup = {} as FormGroup  
  private club$: Observable<any> = of(null)
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
    this.myForm = this.fb.group({
      address:[''],
      description:[''],
      listPhotoURL:[''],
      gaugin:[0],
      headerPhotoURL:[''],
      name: [''],
      point:[{}]
      })        
    this.preloadData()
    this.autoSave()
  }

  async preloadData() {
    await this.route.params.pipe(map(p => p.id)).subscribe(e => this.id = e)
    this.state = 'loading'
    this.club$ = await this.feed.get(database.literal.locations,this.id)
    this.club$
      .pipe(
        tap(doc => {
          if (doc) {
            let data = {
              address: doc.address,  
              description: doc.description,
              listPhotoURL: doc.listPhotoURL,
              gaugin: doc.gaugin,
              headerPhotoURL: doc.headerPhotoURL,
              name: doc.name,
              point: doc.point
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
      this.presentToast('La localizacion no puede ser eliminada', 'danger')
  }

  goto(url){
    this.router.navigate([`${this.basehref}${url}`,this.id])
  }

  async presentModal() {
    const window = await this.modal.create({
      component: PreviewClubPage,
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