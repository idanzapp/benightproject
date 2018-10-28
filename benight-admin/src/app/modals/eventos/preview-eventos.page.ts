import { Component, OnInit, Input } from '@angular/core'
import { ToastController } from '@ionic/angular'
import { languages } from '@bn8-constants/constants.languages'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'

@Component({
  selector: 'preview-eventos',
  templateUrl: './preview-eventos.page.html',
  styleUrls: ['./preview-eventos.page.scss'],
})
export class PreviewEventosPage implements OnInit {

  list: string[] = languages.language_list
  selected = ''
  event: any = {requisites:[]}
  @Input() id: any

  constructor(private feed: DataFeedService,private toast: ToastController ) { }

  ngOnInit() {    
    let idx
    switch (navigator.language) {
      case languages.es:
        idx = 0
        break
      case languages.fr:
        idx = 2
        break
      case languages.pt:
        idx = 3
        break
      default:
        idx = 1 
    }  
    this.selected = this.list[idx]    
    this.getEvent()
  }  

  private async getEvent(){
    this.event = await this.feed.getItem(database.VAR_EVENTS,this.id)
  }
  selectLanguage(language:string) {
    this.selected = language
  }

  async presentToast() {
    let message = this.event.requisites.reduce( (val:string,current:string) => {
      return  `${val} ${current}`
    })
    const toast = await this.toast.create({
      message: message,
      position: 'top',
      duration: 3000
    })
    toast.present()
  }

}