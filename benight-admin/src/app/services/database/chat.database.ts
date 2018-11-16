import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable, of, combineLatest } from 'rxjs'
import { shareReplay, switchMap, map, startWith, tap } from 'rxjs/operators'
import { firestore } from 'firebase/app'

export class ChatDatabase {
    private chats$: Observable<any>
    private uid$
    private name$

    private fields = {
        alias$: of(null),
        messages$: of(null)
    }

    constructor(private fc: FirebaseClient, private auth: AuthService) { this.preloadData() }

    private async preloadData() {
        this.uid$ = await this.auth.uid()
        this.name$ = await this.auth.name()
        let spam$ = await this.fc.collection$(`${database.tableNames.spam}`, { db: database.connections.chat })
            .pipe(
                map(spam => spam.filter(u => u.id === this.uid$).length === 0),
                shareReplay(1)
            )
        this.chats$ = await spam$.pipe(
            startWith(true),
            switchMap(val => {
                return this.fc.collection$(`${database.tableNames.chats}/${this.uid$}/${database.listFields.chatList}`, { db: database.connections.chat })
                    .pipe(
                        tap(chats => {
                            let ids
                            chats.reduce(chat => {
                                ids.push(this.fc.doc$(`${database.tableNames.messages}/${chat}`, database.connections.chat))
                                this.fc.updateAt(`${database.tableNames.messages}/${chat}/${database.listFields.usersList}/${this.uid$}`, { docID: chat['docID'], name: this.name$, uid: this.uid$}, database.connections.chat)
                                this.fc.updateAt(`${database.tableNames.chats}/${this.uid$}/${database.listFields.chatList}/${chat}`, { docID: chat['docID'] }, database.connections.chat)
                                return chat
                            })
                            this.fields.messages$ = combineLatest(ids).pipe(shareReplay(1))                            
                        }),
                        shareReplay(1))
            }))
        this.fields.alias$ = await this.fc.collection$(`${database.tableNames.alias}/${this.uid$}/${database.listFields.aliasList}`, { db: database.connections.chat })
            .pipe(shareReplay(1))
    }

    fetch() {
        return this.chats$
    }

    get(id: string) {
        return this.chats$.pipe(map(e => e.filter(u => u.id === id)[0]))
    }

    getField(data: any) {
        if (this.fields.hasOwnProperty(data.field))
            return this.fields[data.field]
        return this.get(data.id).pipe(map(u => u && u[data.field]))
    }

    remove(eid: string) {
        let check = false
        if (check)
            this.fc.delete(`${database.tableNames.chats}/${this.uid$}/${database.listFields.chatList}/${eid}`, database.connections.chat)
        return check
    }

    save(data: any) {
        let messageList = this.getField(data)
        messageList.pipe(
            tap(chat => {
                let numMessages = chat['numMessages']
                let doc = chat['docID']
                let numDocs = chat['numDocs']
                let message
                if (numMessages > 800) {
                    let uid = this.fc.createId(database.connections.chat)
                    message = { message: firestore.FieldValue.arrayUnion({...data.message, eid: this.uid$, createdAt: Date.now()}) }
                    this.fc.updateAt(`${database.tableNames.messages}/${data.id}/${database.listFields.messagesList}/${uid}`, message, database.connections.chat)
                    this.fc.updateAt(`${database.tableNames.messages}/${data.id}`, { docID: uid, numDocs: numDocs + 1, numMessages: data.message.length }, database.connections.chat)
                } else {
                    message = { eid: this.uid$, message: firestore.FieldValue.arrayUnion({...data.message,eid: this.uid$, createdAt: Date.now()}) }
                    this.fc.updateAt(`${database.tableNames.messages}/${data.id}/${database.listFields.messagesList}/${doc}`, message, database.connections.chat)
                    this.fc.updateAt(`${database.tableNames.messages}/${data.id}`, { numMessages: numMessages + data.message.length }, database.connections.chat)
                }
            })
        )
        return data.id
    }

    add(data:any) {
        let uid
        if(data.moderator) {
            uid = data.uid
            this.fc.updateAt(`${database.tableNames.messages}/${data.uid}/${database.listFields.moderatorList}/${data.eid}`, { uid: data.eid, photoURL: data.photoURL, name: data.name, createdAt: new Date().toISOString() }, database.connections.chat)
        } else {
            uid = this.fc.createId(database.connections.admin)
            this.fc.updateAt(`${database.tableNames.messages}/${uid}`, { uid: uid, docID: '', messagesList: {}, moderatorList: {}, userList: {}, createdAt: new Date().toISOString() }, database.connections.chat)
        }
        return uid
    }
}

