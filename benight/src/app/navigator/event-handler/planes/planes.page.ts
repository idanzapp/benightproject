import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'eventos-planes',
  templateUrl: './planes.page.html',
  styleUrls: ['./planes.page.scss'],
})
export class PlanesPage implements OnInit {

  constructor(private router: Router,private sd: SharedDataService) { }

  ngOnInit() {}

  detail() {
    this.sd.set('tabs',{info:true,galeria:true,listado:false,qr:false})
    this.sd.set('header','Eventos')
    this.router.navigate(['/navigator/eventos-handler/planes/detalle/info'])
  }

}
