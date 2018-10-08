import { Component, OnInit } from '@angular/core'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(public sd: SharedDataService) { 
  }

  ngOnInit() {
    this.sd.set('header', 'Chat')   
  }
}
