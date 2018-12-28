import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { database } from '@bn8-constants/constants.database'
import { Router } from '@angular/router'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  public location
  public itemFields = 
  { 
    eventos:  {
      title: 'Nuevo Evento',
      subtitle: 'Fecha',
      tags: 'tags',
      text: 'direccion',
      avatar: 'assets/img/avatar.png'
    },
    clubs:  {
      title: 'Nueva Localizacion',
      subtitle: 'Fecha',
      tags: 'tags',
      text: 'direccion',
      avatar: 'assets/img/avatar.png'
    },
    planes:  {
      title: 'Nuevo Plan',
      subtitle: 'Fecha',
      tags: 'tags',
      text: 'direccion',
      avatar: 'assets/img/avatar.png'
    },
    entradas:  {
      title: 'Nueva Entrada',
      subtitle: 'Fecha',
      tags: 'tags',
      text: 'direccion',
      avatar: 'assets/img/avatar.png'
    },
    empleados:  {
      title: 'Nuevo Empleado',
      subtitle: 'Fecha',
      tags: 'tags',
      text: 'direccion',
      avatar: 'assets/img/avatar.png'
    },
    promos:  {
      title: 'Nueva Promocion',
      subtitle: 'Fecha',
      tags: 'tags',
      text: 'direccion',
      avatar: 'assets/img/avatar.png'
    }
  }
 
  private literal = {
    test: database.literal.events,
    eventos: database.literal.events,
    clubs: database.literal.locations,
    planes: database.literal.plans,
    entradas: database.literal.tickets,
    empleados: database.literal.employee,
    promos: database.literal.promos
  }
  items$: Observable<any> = of(null)
  constructor(private loc: Location,private router: Router,private feed: DataFeedService) {
    let location = this.loc.path().split('/')
    this.location = location[location.length-1]
  } 

  ngOnInit() {    
    this.items$ = this.feed.fetch2(this.literal[this.location])
  }

  async goto(id?:string) {
    if (!id) 
      id = await this.feed.add(this.literal[this.location]) 
    this.router.navigate([`${this.loc.path()}/${database.actions.edit}`, id])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }

  remove(id) {
    this.feed.remove(this.literal[this.location],id)
  }

  changeTab(item) {
    this.location = item.detail.value
    this.items$ = this.feed.fetch2(this.literal[this.location])
  }
}
