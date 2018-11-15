import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { ModalController } from '@ionic/angular'
import { SearchUsersPage } from '@bn8-imports/imports.previews'

@Component({
  selector: 'general-bans',
  templateUrl: './bans.page.html',
  styleUrls: ['./bans.page.scss'],
})
export class BansPage implements OnInit {
  
  bans$: Observable<any>

  constructor(
    private feed: DataFeedService,
    private modal: ModalController
  ) {}  

  async ngOnInit() {
    this.bans$ = await this.feed.fetch(database.literal.bans)
  }
  
  async presentModal() {
    const window = await this.modal.create({
      component: SearchUsersPage,
      componentProps: {search:'bans'}
    })
    return await window.present()
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }
}
