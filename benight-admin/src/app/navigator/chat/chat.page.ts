import { Component } from '@angular/core'
import { encrypt, decrypt } from 'scryptify'
import { environment } from '@bn8-environments/environment'

@Component({
  selector: 'chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
  private secret:string = environment.secret.secret
  cadena:string=''
  private state: 'modified'|'synced'|'error' = 'synced'
  constructor() {}

  async save(e) {
    this.state = 'modified'
    this.cadena = e.detail.value
    if (this.cadena!='') {
      let encryption = await encrypt(this.cadena,this.secret)
      let decryption = await decrypt(encryption,this.secret)      
      console.log(this.cadena,encryption,decryption)
    } else {
      this.state = 'synced'
    }
  }

  newMessage() {
    return this.state ==='modified'
  }

  send() {
    console.log('spam!')
    this.state = 'synced'
  }
  receive() {}
}
