
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'detalle-handler',
  templateUrl: './detalle-handler.page.html',
  styleUrls: ['./detalle-handler.page.scss'],
})
export class DetalleHandlerPage implements OnInit {

  myTabs = [] 
  constructor(private router: Router,private sd: SharedDataService) {
    this.setTabs(sd.get('tabs'))
  }

  private setTabs(tabs) {    
    var basehref = this.router.url.slice(0,this.router.url.lastIndexOf('/'))
    if(tabs['listado'])
      this.myTabs = [...this.myTabs, {href:`${basehref}/listado`,title:'Eventos'}]
    if(tabs['qr'])
      this.myTabs = [...this.myTabs, {href:`${basehref}/qr`,title:'QR'}]
    if(tabs['info'])
      this.myTabs = [...this.myTabs, {href:`${basehref}/info`,title:'Info'}]
    if(tabs['galeria'])
      this.myTabs = [...this.myTabs, {href:`${basehref}/galeria`,title:'Galeria'}]
  }

  ngOnInit() {
  }

}
