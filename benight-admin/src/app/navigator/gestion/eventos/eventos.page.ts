import { Component, OnInit } from '@angular/core'
import { SharedDataService } from '@bn8-services/shared-data.service'
import { database } from '@bn8-database/interfaces'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'gestion-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  
  events: Observable<any>

  constructor(
    private sd: SharedDataService,
    private router: Router
  ) {}

  private basehref 
  public default  

  async ngOnInit() {
    this.sd.set(database.VAR_HEADER, 'Eventos')
    this.sd.set(database.VAR_BACK, false)
    this.events = await this.sd.get(database.VAR_EVENTS)
    this.basehref = this.router.url.slice(0,this.router.url.lastIndexOf('/'))
    this.default = this.createDefault()
  }

  private createDefault(){
    return {}
  }

  goto(path,data) {    
    this.sd.set(database.VAR_BACK, true)
    this.sd.set(database.VAR_BACK_URL,`${this.basehref}/eventos`)       
    
    this.router.navigate([`${this.basehref}/eventos/${path}`])
  }

  trackById(idx, todo) {
    return todo.id
  }

}