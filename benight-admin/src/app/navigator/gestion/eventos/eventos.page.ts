
import { Component, OnInit } from '@angular/core'
import { SharedDataService } from '@bn8-services/shared-data.service'
import { DbService } from '@bn8-services/db.service'
import { AuthService } from '@bn8-services/auth.service'
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
    private db:DbService,
    private auth:AuthService,
    private router: Router
  ) {}

  private basehref 
  public default  

  async ngOnInit() {
    this.sd.set('header', 'Eventos')
    this.sd.set('back-button', false)
    let user = 0
    user = await this.auth.uid() as any 
    this.events = await this.db.leftJoin('propietario_eventos','eventos','ownerUid','uid', user, 'event','event')
    this.basehref = this.router.url.slice(0,this.router.url.lastIndexOf('/'))
    this.default = this.createDefault()
  }

  private createDefault(){
    return {}
  }

  goto(path,data) {
    this.sd.set('eventos', data)    
    this.sd.set('back-button', true)
    this.sd.set('back-url',`${this.basehref}/eventos`)
       
    
    this.router.navigate([`${this.basehref}/eventos/${path}`])
  }

  trackById(idx, todo) {
    return todo.id
  }

}