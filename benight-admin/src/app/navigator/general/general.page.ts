import { Component, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements AfterViewInit {
  
  generalTabs = [
    {href:'/navigator/general/info',title:'Info'},
    {href:'/navigator/general/preferencias',title:'Preferencias'},
    {href:'/navigator/general/estadisticas',title:'Estadisticas'},
    {href:'/navigator/general/bans',title:'Bans'}
  ]

  constructor() { }

  ngAfterViewInit() {} 

}
