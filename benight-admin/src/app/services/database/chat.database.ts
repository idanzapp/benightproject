import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay, mapTo, merge, switchMap, reduce, filter } from 'rxjs/operators'

interface Chat {
    closedAt?: Date,
    messages:any,
    name?:string,
    numMessages:number,
    open:boolean,
    openDate?: Date
}

export class ChatDatabase implements OnInit {
    chats$: Observable<any>
    alias$: Observable<any> 
    spam$: Observable<any>

    constructor(private db: FirebaseClient, private auth: AuthService) {}

    async ngOnInit() {
        //Check if you are banned for spam
        this.spam$ = await this.db.collection$(database.tables.users.relations.spam.name, ref => ref.where(database.tables.users.relations.spam.fields.relation , database.operations.equal, this.auth.uid()), database.connections.chat)
        .pipe(
            mapTo( value => {
                if (value) 
                    return value
                else
                    return false
            }),
            shareReplay(1))
        this.alias$ = await this.db.collection$(database.tables.alias.name,ref => ref.where(database.tables.alias.externalId , database.operations.equal, this.auth.uid()), database.connections.chat)
        .pipe(shareReplay(1))
        this.chats$ = await this.getChats()               
    }

    private getChats() {
        return this.db.collection$(
            database.tables.users.relations.chat.name,
            ref => ref.where(database.tables.users.relations.chat.fields.relation,database.operations.equal,this.auth.uid()), 
            database.connections.chat)
        .pipe(
            //transform collection into id[]
            switchMap((value) => {
                let table
                table.push(value.forEach(element => {
                    return element[database.tables.chats.internalId]
                }))
                return table
            }),
            //Transform id[] into query as string
            reduce((value,current) => `${value} | ${current}` ),
            //Get all the open chats of the user
            switchMap((value) => {
                return this.db.collection$(database.tables.chats.name, ref => ref
                    .where(database.tables.chats.internalId,database.operations.equal,value)                    
                    .where(database.tables.chats.fields.isOpen,database.operations.equal, true )
                    , database.connections.chat)
            }),
            //Filters the chat if they started
            filter((collection) => collection[database.tables.chats.fields.openOn] <= Date()),
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

    createChat(data: Chat) {        
        this.db.createAt(database.tables.chats.name,data,database.connections.chat)
    }

}

