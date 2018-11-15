import { Component, OnInit, Input } from '@angular/core'
import { ToastController } from '@ionic/angular'
import { language, languageIcon } from '@bn8-constants/constants.languages'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'

@Component({
  selector: 'preview-eventos',
  templateUrl: './preview-eventos.page.html',
  styleUrls: ['./preview-eventos.page.scss'],
})
export class PreviewEventosPage implements OnInit {
  
  language = language
  languageIcon = languageIcon
  selected:string = navigator.language.slice(0,2)
  event: any = {requisites:[]}
  @Input() id: any

  constructor(private feed: DataFeedService,private toast: ToastController ) { }

  ngOnInit() {       
    this.getEvent()
  }  

  private async getEvent(){
    this.event = await this.feed.get(database.tableNames.events,this.id)
  }
  selectLanguage(property:string) {
    this.selected = property
  }

  async presentToast() {
    let message = this.event.requisites.reduce((val:string,current:string) => `${val} ${current}`)
    const toast = await this.toast.create({
      message: message,
      position: 'top',
      duration: 3000
    })
    toast.present()
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }
}