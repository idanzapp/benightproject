import { Component, OnInit  } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'detalle-detalle-info-promo',
  templateUrl: './detalle-info-promo.page.html',
  styleUrls: ['./detalle-info-promo.page.scss'],
})
export class DetalleInfoPromoPage implements OnInit {

  myForm: FormGroup = {} as FormGroup
  create: boolean = true
  minDate: string  = ''  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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
