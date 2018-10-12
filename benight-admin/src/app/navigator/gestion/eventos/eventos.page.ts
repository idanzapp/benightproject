import { Component, OnInit } from '@angular/core'
import { SharedDataService } from '@bn8-services/shared-data.service'
import { DbService } from '@bn8-services/db.service'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'



@Component({
  selector: 'gestion-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  
  events: Observable<any>

  constructor(
    private sd: SharedDataService,
    private db:DbService,
    private auth:AuthService,

    ) {}

  async ngOnInit() {
    this.sd.set('header', 'Eventos')
    //let user = await this.auth.user$
    let user = {uid:0}
    this.events = await this.db.leftJoin('propietario_eventos','eventos','ownerUid','uid',user.uid, 'event','event')
    //console.log(this.events)
  }

  trackById(idx, todo) {
    return todo.id
  }

}