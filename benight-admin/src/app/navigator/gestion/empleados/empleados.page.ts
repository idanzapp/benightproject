import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { ModalController } from '@ionic/angular'
import { SearchUsersPage } from '@bn8-imports/imports.previews'

@Component({
  selector: 'gestion-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {
  
  empleados$: Observable<any>
  private basehref:string = ''

  constructor(
    private feed: DataFeedService,
    private router: Router,
    private modal: ModalController
  ) {}  

  async ngOnInit() {
    this.empleados$ = await this.feed.fetch(database.literal.employee)
    this.basehref = this.router.url.slice(0,this.router.url.lastIndexOf('/'))
  }

  async goto(id?:string) {
    id ? id : await this.feed.add(database.literal.employee) 
    this.router.navigate([`${this.basehref}/empleados/${database.actions.edit}`, id])
  }
  
  async presentModal() {
    const window = await this.modal.create({
      component: SearchUsersPage,
      componentProps: {search:'admins'}
    })
    return await window.present()
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }
}
