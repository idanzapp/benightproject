import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable, of } from 'rxjs'
import { shareReplay, mapTo, merge, switchMap, filter, take, pluck, toArray  } from 'rxjs/operators'
            

interface Chat {
    closedAt?: Date,
    messages: any,
    name?: string,
    numMessages: number,
    open: boolean,
    openDate?: Date
}

export class ChatDatabase implements OnInit {
    chats$: Observable<any>
    alias$: Observable<any>
    spam$: Observable<any>
    uid: Observable<any>

    constructor(private db: FirebaseClient, private auth: AuthService) { }

    async ngOnInit() {
        //Check if you are banned for spam
        this.uid = this.auth.uid()
        this.spam$ = await this.db.collection$(database.tables.spam, ref => ref.where(database.fields.internalId, database.operations.equal, this.uid), database.connections.chat)
            .pipe(
                mapTo(value => {
                    if (value)
                        return value
                    else
                        return false
                }),
                shareReplay(1))
        this.alias$ = await this.auth.alias()
        this.chats$ = await this.chats()

    }

    private chats() {
        return this.spam$.pipe(
            merge(
                this.uid.pipe(
                    switchMap(uid => {
                        if (uid)
                            return this.db.collection$(`${database.tableNames.userChat}/${uid}/${database.listFields.chatList}`)
                        return of(null)
                    }),
                    take(1),
                    filter(u => u[database.fields.openDate] <= Date()),
                    shareReplay(1)
                )
            )
        )
    }

    //lista de mensajes
    async messagesList(uid: string) {
        //Get from storage
        //compare storage num with DB num
        //download all messages i have not
        //if all users got it, remove from database 
        let numMessages = 0 //get from storage
        let messagesList = [] //get from storage
        let newMessages = await this.db.doc$(`${database.tableNames.chats}/${uid}`,database.connections.chat)
             .pipe(
                switchMap(relation => {
                    numMessages = relation.numMessages
                    return relation.messagesList
                }),
                filter( messageList => messageList[uid] >= numMessages),
                toArray()
            )
        messagesList = [...messagesList, newMessages] //await save to storage
        return messagesList
    }

    getChatIdOfEvent(eid: string) {
        return this.db.collection$(`${database.tableNames.chatEvent}`,
            ref => ref.where(database.fields.externalId, database.operations.equal, eid),
            database.connections.chat).pipe(
                pluck(database.fields.internalId),
                shareReplay(1)
            )
    }

    getEventIdOfChat(uid: string) {
        return this.db.collection$(`${database.tableNames.chatEvent}`,
            ref => ref.where(database.fields.internalId, database.operations.equal, uid),
            database.connections.chat).pipe(
                pluck(database.fields.externalId),
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

    createChat(id: string) {
        let data = {} //await 
        this.db.createAt(database.tableNames.chats, {uid:id,...data}, database.connections.chat)
    }

    deleteChat(uid: string) {
        this.db.delete(`${database.tableNames.chats}/${uid}`, database.connections.chat)
    }

}

