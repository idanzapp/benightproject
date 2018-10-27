import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database, tables as tb} from '@bn8-interfaces/interfaces.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay, mapTo, merge, switchMap, reduce, filter } from 'rxjs/operators'

export class ChatDatabase implements OnInit {
    chats$: Observable<any>
    alias$: Observable<any> 
    spam$: Observable<any>

    constructor(private db: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        //Check if you are banned for spam
        this.spam$ = await this.db.collection$(tb.TB_USER_SPAM, ref => ref.where(tb.SPAM_FIELD , tb.OP_EQUAL, this.auth.uid()), database.DB_CON_CHAT)
        .pipe(
            mapTo( value => {
                if (value) 
                    return value
                else
                    return false
            }),
            shareReplay(1))
        this.alias$ = await this.db.collection$(tb.TB_USER_ALIAS,ref => ref.where(tb.SPAM_FIELD , tb.OP_EQUAL, this.auth.uid()), database.DB_CON_CHAT)
        .pipe(shareReplay(1))
        this.chats$ = await this.getChats()               
    }

    private getChats() {
        return this.db.collection$(tb.TB_USER_CHAT, ref => ref.where(tb.USER_CHAT_FIELD,tb.OP_EQUAL,this.auth.uid()), database.DB_CON_CHAT)
        .pipe(
            //transform collection into id[]
            switchMap((value) => {
                let table
                table.push(value.forEach(element => {
                    return element[tb.CHATROOM_FIELD]
                }))
                return table
            }),
            //Transform id[] into query as string
            reduce((value,current) => `${value} | ${current}` ),
            //Get all the open chats of the user
            switchMap((value) => {
                return this.db.collection$(tb.TB_CHAT, ref => ref
                    .where(tb.CHATROOM_FIELD,tb.OP_EQUAL,value)                    
                    .where(tb.CHATROOM_ISOPEN_FIELD,tb.OP_EQUAL, true )
                    , database.DB_CON_CHAT)
            }),
            //Filters the chat if they started
            filter((collection) => collection[tb.CHATROOM_OPENON_FIELD] <= Date()),
            //Check if you are a Spammer  
            merge(this.spam$),            
            shareReplay(1)
        )
    }

    fetch() {
        return this.chats$ 
    }

    getAlias() {
        return this.alias$ 
    }

    getSpam() {
        return this.spam$ 
    }

    private createChat() {}

}

