import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {

  constructor(private router: Router,private sd: SharedDataService) {}

  ngOnInit() {}  

  detail() {
    this.sd.set('tabs',{info:true,galeria:false,listado:false,qr:true})
    this.sd.set('header','QR')
    this.router.navigate(['/navigator/entradas/detalle/qr'])
  }
}
