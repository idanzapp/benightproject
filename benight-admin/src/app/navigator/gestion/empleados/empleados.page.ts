import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-interfaces/interfaces.database'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'gestion-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {
  
  empleados: Observable<any>

  constructor(
    private feed: DataFeedService,
    private fc: FirebaseClient,
    private router: Router
  ) {}

  private basehref:string = ''
  public default:string = ''
  public create:string = database.ACTION_CREATE
  public edit:string =  database.ACTION_EDIT  

  async ngOnInit() {
    this.empleados = await this.feed.get(database.VAR_EMPLOYEE)
    this.basehref = this.router.url.slice(0,this.router.url.lastIndexOf('/'))
    this.default = this.fc.afs().createId()
  }

  goto(path:string,data:string) {    
    this.feed.next(database.VAR_BACK_URL,`${this.basehref}/empleados`)       
    //If default, renew id
    if (data = this.default)
      this.default = this.fc.afs().createId()
    this.router.navigate([`${this.basehref}/empleados/${path}`,data])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }
}
