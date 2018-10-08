import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {
  
  generalTabs = [
    {href:'/navigator/general/info',title:'Info'},
    {href:'/navigator/general/preferencias',title:'Preferencias'},
    {href:'/navigator/general/estadisticas',title:'Estadisticas'},
    {href:'/navigator/general/bans',title:'Bans'}
  ]

  constructor(private router: Router) { }

  ngOnInit() {}

}
