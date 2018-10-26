import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ModalController } from '@ionic/angular'
import { PreviewEventosPage } from '@bn8-imports/imports.previews' 
import { DataFeedService } from '@bn8-services/data-feed.service'
import { ActivatedRoute, Params} from '@angular/router'
import { database } from '@bn8-core/interfaces/interfaces.database'

@Component({
  selector: 'detalle-detalle-info-event',
  templateUrl: './detalle-info-event.page.html',
  styleUrls: ['./detalle-info-event.page.scss'],
})
export class DetalleInfoEventPage implements OnInit {

  myForm: FormGroup
  create: boolean = true
  minDate: string
  event: any
  id: any

  constructor(private fb: FormBuilder,
    private feed: DataFeedService, 
    public modal: ModalController,
    private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    // subscribe to router event
     this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id
    })
    this.getEvent()
    const actualDate: string = new Date().toISOString()
    this.minDate = actualDate
    this.myForm = this.fb.group({
      activateCountdown: false,
      adress: '',
      assistants: 0,
      description: '',
      duration: '',
      enableEvent: false,
      enableList: false,
      eventPhotoURL: '',
      free: false,
      gaugin: 0,
      headerPhotoURL: '',
      initDate: actualDate,
      maxAge: 0,
      minAge: 0,
      name: '',
      nextDate: actualDate,
      photoURL: '',
      price: 0,
      promoBudget: 0
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

  private async getEvent(){
    this.event = await this.feed.getItem(database.VAR_EVENTS,this.id)
  }

  async presentModal() {
    const window = await this.modal.create({
      component: PreviewEventosPage,
      componentProps: { id: this.id }
    })
    return await window.present()

  }
}