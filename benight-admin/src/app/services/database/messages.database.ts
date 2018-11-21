import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { Observable, of, BehaviorSubject } from 'rxjs'
import { shareReplay, switchMap, tap, map } from 'rxjs/operators'
import { firestore } from 'firebase/app'
import { AuthService } from '@bn8-services/auth.service'

export class MessagesDatabase  {
    private messages$: Observable<any> = of(null)
    private getInfo$: BehaviorSubject<any> = new BehaviorSubject({id:'',doc:'0'})
    
    private info$

    constructor(private fc: FirebaseClient, private auth: AuthService) {this.preloadData() }

    private async preloadData() {         
        this.info$ = await this.auth.user()
        this.messages$ = await this.getInfo$.pipe(
            switchMap(info => {
                let id = info.id
                let doc = info.doc                
                if (id != '')
                    return this.fc.collection$(`${database.tables.messages}/${id}/${database.list.doc}`, {query: ref => ref.orderBy('uid').startAt(doc), db:database.connections.chat})
                return of(null)
            }),
            map(doc => {
                if (doc) {
                    let messages = []
                    for(let i in doc) {
                       messages = [...messages,...doc[i][database.list.messages]]
                    }
                    return messages
                } else
                  return []                 
             }),
            shareReplay(1))
    }

    fetch() {
        return this.messages$
    }

    get(data:any) {
        this.getInfo$.next(data)
    }   

    save(data: string) {
        let message =  {
                message: data, 
                eid: this.info$.uid,
                name: this.info$.displayName, 
                photoURL: this.info$.photoURL, 
                createdAt: Date.now()
            } 
              
        this.messages$.pipe(
            tap( messages => {
                let len = messages[messages.length-1].messages.length
                this.getInfo$.pipe(
                    tap( info => {
                        if (len >= 800) {
                            let uid = firestore.FieldValue.serverTimestamp()                                                                           
                            this.fc.updateAt(`${database.tables.messages}/${info.id}/${database.list.messages}/${uid}`, message, database.connections.chat)    
                            this.fc.updateAt(`${database.tables.chats}/${this.info$.uid}/${database.list.chat}/${info.id}`, {docId:uid}, database.connections.chat)    
                        } else 
                            this.fc.updateAt(`${database.tables.messages}/${info.id}/${database.list.messages}/${info.doc}`, firestore.FieldValue.arrayUnion(message), database.connections.chat)    
                    }))
            })
        )
        return true
    }
}

