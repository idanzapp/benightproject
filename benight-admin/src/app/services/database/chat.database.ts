import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable, of } from 'rxjs'
import { shareReplay, mapTo, merge, switchMap, filter, take, toArray, map  } from 'rxjs/operators'
            

export class ChatDatabase implements OnInit {
    private chats$: Observable<any>

    private fields = {
        alias$: of(null),
        spam$: of(null),
        uid$: of(null),
        messages$: of(null),
    }

    constructor(private fc: FirebaseClient, private auth: AuthService) { }

    async ngOnInit() {
        //Check if you are banned for spam
        this.fields.uid$ = this.auth.uid()
        this.fields.spam$ = await this.fc.collection$(database.tableNames.spam, ref => ref.where(database.fields.internalId, database.operations.equal, this.fields.uid$), database.connections.chat)
            .pipe(
                mapTo(value => {
                    if (value)
                        return value
                    else
                        return false
                }),
                shareReplay(1))
        this.fields.alias$ = await this.auth.alias()
        this.chats$ = await this.chats()
        //this.fields.messages$ = await this.messages()

    }

    private chats() {
        return this.fields.spam$.pipe(
            merge(
                this.fields.uid$.pipe(
                    switchMap(uid => {
                        if (uid)
                            return this.fc.collection$(`${database.tableNames.userChat}/${uid}/${database.listFields.chatList}`)
                        return of(null)
                    }),
                    take(1),
                    filter(u => u[database.fields.openDate] <= Date()),
                    shareReplay(1)
                )
            )
        )
    }

    fetch() {
        return this.chats$
    }

    getField(data:any) {
        if (data.field in this.fields) {
            return this.fields[data.field]
        } else         
            return this.get(data.id).pipe(
                map( u => u && u[data.field]),
                shareReplay(1)
            )
    }

    get(id:string) {
        return this.chats$.pipe(
            filter( u => u.uid === id),
            shareReplay(1)
            )
    }
///////////////////////////////////////
// Its needed to revise down functions //
///////////////////////////////////////

    create(id: string) {
        let data = {} //await 
        this.fc.updateAt(database.tableNames.chats, {uid:id,createdAt: new Date(),...data}, database.connections.chat)
    }

    delete(uid: string) {
        this.fc.delete(`${database.tableNames.chats}/${uid}`, database.connections.chat)
    }

    //lista de mensajes
    async messages(uid: string) {
        //Get from storage
        //compare storage num with DB num
        //download all messages i have not
        //if all users got it, remove from database 
        let numMessages = 0 //get from storage
        let messagesList = [] //get from storage
        let newMessages = await this.fc.doc$(`${database.tableNames.chats}/${uid}`,database.connections.chat)
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

}

