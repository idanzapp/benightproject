import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'navigator',
  templateUrl: './navigator.page.html',
  styleUrls: ['./navigator.page.scss'],
})
export class NavigatorPage implements OnInit {

  header: string = "Eventos"
  hasTab: boolean = true
  simLocation: string = 'none'
  mainTab = [
    { label: 'Test',icon: 'play' ,tab: 'test' },
    { label: 'Gestion',icon: 'play' ,tab: 'gestion' },
    { label: 'Chat',icon: 'list' ,tab: 'chat' },
    { label: 'Notificaciones',icon: 'list' ,tab: 'notificaciones' },
    { label: 'General',icon: 'book' ,tab: 'general' }
  ]
  tabInfo = {
    gestion: [
      { label: 'EVENTOS', tab: 'gestion/eventos' },
      { label: 'PLANES', tab: 'gestion/planes' },
      { label: 'CLUBS', tab: 'gestion/clubs' },
      { label: 'ENTRADAS', tab: 'gestion/entradas' },
      { label: 'EMPLEADOS', tab: 'gestion/empleados' },
      { label: 'PROMOS', tab: 'gestion/promos' }
    ],
    notificaciones: [
      { label: 'NOTIFICACIONES', tab: 'notificaciones/notificaciones' },
      { label: 'GESTION', tab: 'notificaciones/gestion' }
    ],
    general: [
      { label: 'INFO', tab: 'general/info' },
      { label: 'PREFERENCIAS', tab: 'general/preferencias' },
      { label: 'ESTADISTICAS', tab: 'general/estadisticas' },
      { label: 'BANS', tab: 'general/bans' }
    ],
    none: [
      { label: 'DEFAULT', tab: '' }
    ]
  }

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {      
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        let loc = this.location.path().split('/')
        //console.log(`${loc[loc.length-1]} => ${loc[2]}`)
        this.header = loc[loc.length-1].toUpperCase()
        this.simLocation = (loc[2]==='test' || loc[2]==='chat') ? 'none' : loc[2]
        this.hasTab = (this.simLocation!='none')
        //console.log(`${this.simLocation} => ${this.hasTab}`)
      })
  }

  gotoBack() {
    this.location.back()
  }

}
