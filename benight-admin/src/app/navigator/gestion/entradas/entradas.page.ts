import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'gestion-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {
  
  entradas$: Observable<any>
  private basehref:string = ''

  constructor(
    private feed: DataFeedService,
    private router: Router
  ) {}  

  async ngOnInit() {
    this.entradas$ = await this.feed.fetch(database.literal.tickets)
    this.basehref = this.router.url.slice(0,this.router.url.lastIndexOf('/'))
  }

  async goto(id?:string) {
    id ? id : await this.feed.add(database.literal.tickets) 
    this.router.navigate([`${this.basehref}/entradas/${database.actions.edit}`, id])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }
}
