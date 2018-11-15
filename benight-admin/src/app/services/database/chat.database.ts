import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable, of } from 'rxjs'
import { shareReplay, switchMap, map, startWith  } from 'rxjs/operators'
            

export class ChatDatabase {
    private chats$: Observable<any>
    private uid$

    private fields = {
        alias$: of(null),
        //messages$: of(null)
    }

    constructor(private fc: FirebaseClient, private auth: AuthService) {this.preloadData()}

    private async preloadData() {
        this.uid$ = await this.auth.uid()        
        let spam$ = await this.fc.collection$(`${database.tableNames.spam}`, {db: database.connections.chat})
            .pipe( 
                map(spam => spam.filter(u => u.id === this.uid$).length === 0),
                shareReplay(1)
            )
        this.chats$ = await spam$.pipe(
            startWith(true),
            switchMap( val => {
                return this.fc.collection$(`${database.tableNames.chats}/${this.uid$}/${database.listFields.chatList}`, {db: database.connections.chat})
                .pipe(shareReplay(1))
            }))        
        this.fields.alias$ = await this.fc.collection$(`${database.tableNames.alias}/${this.uid$}/${database.listFields.aliasList}`, {db: database.connections.chat})
            .pipe(shareReplay(1))   
        /*this.fields.messages$ = await this.fc.collection$(`${database.tableNames.messages}/${this.fields.uid$}/${database.listFields.messageList}`, {db: database.connections.chat})
            .pipe(shareReplay(1)) */     
    }    
    
    fetch() {
        return this.chats$
    }

    get(id:string) {
        return this.chats$.pipe(map(e => e.filter(u => u.id === id)[0]))   
    }

    getField(data:any) {
        if(this.fields.hasOwnProperty(data.field))
            return this.fields[data.field]
        return this.get(data.id).pipe(map( u => u && u[data.field]))
    }

    remove (eid:string) {
        let check = false
        if (check)
            this.fc.delete(`${database.tableNames.chats}/${this.uid$}/${database.listFields.chatList}/${eid}`,database.connections.chat)
        return check    
    }

    save(data:any) {
        this.fc.updateAt(`${database.tableNames.chats}/${this.uid$}/${database.listFields.eventList}/${data.uid}`, data, database.connections.chat)
        return data.uid
    }

}

