import { Component, AfterViewInit  } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'detalle-detalle-info',
  templateUrl: './detalle-info-event.page.html',
  styleUrls: ['./detalle-info-event.page.scss'],
})
export class DetalleInfoEventPage implements AfterViewInit {

  myForm: FormGroup
  create: boolean = true
  minDate: string  

  constructor(private fb: FormBuilder) { }

  ngAfterViewInit() {
    const actualDate: string = new Date().toISOString()
    this.minDate = actualDate
    this.myForm = this.fb.group({
      activateCountdown: false,
      adress:'',
      assistants:0,
      description:'',
      duration:'',
      enableList:false,
      eventPhotoURL:'',
      free:false,
      gaugin:0,
      headerPhotoURL:'',
      initDate: actualDate,
      maxAge:0,
      minAge:0,
      name: '',
      nextDate: actualDate,
      photoURL:'',
      price:0,
      promoBudget:0
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

}
