import { Component, OnInit, ViewChild } from '@angular/core'
import { environment } from '@bn8-environments/environment'
import { AuthService } from '@bn8-services/auth.service'
import { Observable, of, BehaviorSubject } from 'rxjs'
import { tap } from 'rxjs/operators'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-core/constants/constants.database';

@Component({
  selector: 'chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  private secret:string = environment.secret.secret
  cadena:string=''
  newMsg:boolean=false

  floatRight:BehaviorSubject<string> = new BehaviorSubject('')
  sender:BehaviorSubject<string> = new BehaviorSubject('')

  @ViewChild('content') content:any

  chats$:Observable<any> = of(null)
  messages$:Observable<any> = of(null)
  user$
  private id = ''

  constructor(private auth: AuthService,private feed: DataFeedService) {}

  ngOnInit() {
    this.preloadData()
  }

  ionViewDidEnter(){
    this.content.scrollToBottom(300);//300ms animation speed
  }

  avatarClass(chat) {
  //Change to subscribable
    if (chat.banned) {
      return 'banned'
    } else  {
      if (parseInt(Date.now().toString().slice(0,10)) > chat.openAt.seconds)
        return 'online'
      else 
        return 'closed'  
    }
  }

  async preloadData() {
    this.chats$ = await this.feed.fetch(database.literal.chats)
    .pipe(
      tap(u => {
        if(u[0]) 
          this.changeSelected({id:u[0].id,doc:u[0].docID})
      })
    )
    this.floatRight.subscribe()
    this.sender.subscribe()

    this.user$ = await this.auth.user().pipe(tap(
      user => this.id = user['uid']
    ))
    this.messages$ = await this.feed.fetch(database.literal.messages)
  }

  changeSelected(data) {
    this.feed.get(database.literal.messages, data)
  }

  checkClass(id) {
    if(id === this.id)
      this.sender.next('my-bubble') 
    this.sender.next('other-bubble') 
  }

  checkAlign(id) {
    return (id === this.id) ? 'floatRight' : ''
  }

  async save(e) {
    this.newMsg=true
    this.cadena = e.detail.value
    console.log(this.cadena)
  }

  send() {
    if(this.newMsg) {     
      this.newMsg=false
      this.cadena=''
    }
  }

  attach() {}

  trackById(idx:number, todo:any) {
    return todo.id
  }
}
