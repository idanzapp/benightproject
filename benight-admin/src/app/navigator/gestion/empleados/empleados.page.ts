import { Component, OnInit } from '@angular/core'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'gestion-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {

  constructor(private sd: SharedDataService) { }

  ngOnInit() {
    this.sd.set('header', 'Empleados')
    this.sd.set('back-button', false)
  }

}
