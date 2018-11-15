import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ModalController } from '@ionic/angular'
import { PreviewEntradaPage } from '@bn8-imports/imports.previews' 
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { ActivatedRoute, Router } from '@angular/router' 
import { ToastController } from '@ionic/angular'

import { Observable, of } from 'rxjs'
import { tap, debounceTime, take, map } from 'rxjs/operators'
@Component({
  selector: 'detalle-detalle-info-entrada',
  templateUrl: './detalle-info-entrada.page.html',
  styleUrls: ['./detalle-info-entrada.page.scss'],
})
export class DetalleInfoEntradaPage implements OnInit {

  myForm: FormGroup = {} as FormGroup  
  private entrada$: Observable<any> = of(null)
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
      closeAt:[actualDate],
      description:[''],
      expires:[false],
      expiresAt:[actualDate],
      finalDate:[actualDate],
      gaugin:[-1],
      name:['prueba'],
      openAt:[actualDate],
      price:[0],
      type:[''],
      uses:[1]
      })        
    this.preloadData()
    this.autoSave()
  }

  async preloadData() {
    await this.route.params.pipe(map(p => p.id)).subscribe(e => this.id = e)
    this.state = 'loading'
    this.entrada$ = await this.feed.get(database.literal.tickets,this.id)
    this.entrada$
      .pipe(
        tap(doc => {
          if (doc) {
            let data = {
              closeAt: doc.closeAt,
              description: doc.description,
              expires: doc.expires,
              expiresAt: doc.expiresAt,
              gaugin: doc.gaugin,
              name: doc.name,
              openAt: doc.openAt,
              price: doc.price,
              type: doc.type,
              uses: doc.uses
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
            this.feed.save(database.literal.tickets,{uid:this.id,...this.myForm.value})  
          this.state = 'synced'         
          this.presentToast('Sincronizado', 'success')
        }
      })
    )
    .subscribe()
  }

  onSubmit(e:any) {
    if (this.myForm.valid && this.state ==='modified') {
      this.feed.save(database.literal.tickets,{uid:this.id,...e})    
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
      this.presentToast('La entrada no puede ser eliminada', 'danger')
  }

  goto(url){
    this.router.navigate([`${this.basehref}${url}`,this.id])
  }

  async presentModal() {
    const window = await this.modal.create({
      component: PreviewEntradaPage,
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