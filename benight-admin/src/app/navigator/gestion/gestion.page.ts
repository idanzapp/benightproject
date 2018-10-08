import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {
  
  gestionTabs = [
    {href:'/navigator/gestion/eventos',title:'Eventos'},
    {href:'/navigator/gestion/planes',title:'Planes'},
    {href:'/navigator/gestion/clubs',title:'Clubs'},
    {href:'/navigator/gestion/entradas',title:'Entradas'},
    {href:'/navigator/gestion/empleados',title:'Empleados'},
    {href:'/navigator/gestion/promos',title:'Promos'}
  ]

  constructor(private router: Router) { }

  ngOnInit() {}

 /* showActive(event) {
    console.log(event,this.router)//`activo gestion: ${event}`,this.router.url)
  }*/

 /* showDeactive(event) {
    console.log(event)//`desactivo gestion: ${event}`,this.router.url)
  }*/

}
