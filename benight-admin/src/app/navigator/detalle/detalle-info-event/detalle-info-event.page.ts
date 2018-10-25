import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ModalController } from '@ionic/angular'
import { PreviewEventosPage } from '@bn8-imports/imports.previews' 

@Component({
  selector: 'detalle-detalle-info-event',
  templateUrl: './detalle-info-event.page.html',
  styleUrls: ['./detalle-info-event.page.scss'],
})
export class DetalleInfoEventPage implements OnInit {

  myForm: FormGroup
  create: boolean = true
  minDate: string

  constructor(private fb: FormBuilder, public modal: ModalController) { }

  ngOnInit() {
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

  async presentModal() {
    const window = await this.modal.create({component: PreviewEventosPage })
    return await window.present()

  }
}