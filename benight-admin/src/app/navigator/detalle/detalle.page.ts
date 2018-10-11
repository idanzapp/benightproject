import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  
  detalleTabs = []

  constructor(private router: Router,private sd: SharedDataService) { }

  private setTabs(tabs?) {    
    var basehref = this.router.url.slice(0,this.router.url.lastIndexOf('/'))
    //if(tabs['info'])
      this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/detalle-info-event`,title:'Info'}]
    //if(tabs['empleados'])
        this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/list-empleados`,title:'Empleados'}]
    //if(tabs['estadisticas'])
      this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/list-estadisticas`,title:'Estadisticas'}]
    //if(tabs['entradas'])
      this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/list-entradas`,title:'Entradas'}]
    //if(tabs['clubs'])
      this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/list-clubs`,title:'Clubs'}]
    //if(tabs['propietarios'])
      this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/list-propietarios`,title:'Propietarios'}]
    //if(tabs['fechas'])
      this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/list-fechas`,title:'Fechas'}]
    //if(tabs['galeria'])
      this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/file-picker`,title:'Galeria'}]
    //if(tabs['requisitos'])
      this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/list-requisitos`,title:'Requisitos'}]
    //if(tabs['tags'])
      this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/list-tags`,title:'Tags'}]
    //if(tabs['listas'])
      this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/list-listas`,title:'Listas'}]
    //if(tabs['traducciones'])
      this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/list-traducciones`,title:'Traducciones'}]
    //if(tabs['publico'])
      this.detalleTabs = [...this.detalleTabs, {href:`${basehref}/list-publico`,title:'Publico'}]      
  }

  ngOnInit() {
    this.setTabs() //this.sd.get('tabs')
  }

}
