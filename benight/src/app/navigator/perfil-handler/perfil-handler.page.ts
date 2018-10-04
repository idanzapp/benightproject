import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'perfil-handler',
  templateUrl: './perfil-handler.page.html',
  styleUrls: ['./perfil-handler.page.scss'],
})
export class PerfilHandlerPage implements OnInit {
  perfilTabs = [
    {href:'/navigator/perfil/perfil',title:'Perfil'},
    {href:'/navigator/perfil/preferencias',title:'Preferencias'},
    {href:'/navigator/perfil/qr',title:'QR'},
    {href:'/navigator/perfil/ads',title:'ADS'}
  ] 
  constructor() { }

  ngOnInit() {
  }

}
