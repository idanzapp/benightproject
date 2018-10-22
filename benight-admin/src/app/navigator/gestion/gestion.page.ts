import { Router } from '@angular/router'
import { Component, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements AfterViewInit {
  
  gestionTabs = [
    {href:'/navigator/gestion/eventos',title:'Eventos'},
    {href:'/navigator/gestion/planes',title:'Planes'},
    {href:'/navigator/gestion/clubs',title:'Clubs'},
    {href:'/navigator/gestion/entradas',title:'Entradas'},
    {href:'/navigator/gestion/empleados',title:'Empleados'},
    {href:'/navigator/gestion/promos',title:'Promos'}
  ]

  constructor(private router: Router) { }

  ngAfterViewInit() {}
}
