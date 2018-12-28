import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireFunctions } from '@angular/fire/functions'
import { AngularFireMessaging } from '@angular/fire/messaging'
import { AngularFireStorage } from '@angular/fire/storage'

import { Observable } from 'rxjs'
import { map, switchMap, reduce } from 'rxjs/operators'

import { database } from '@bn8-constants/constants.database'
import { 
    FirestoreEventService,
    FirestoreAdminService,
    FirestoreTicketService,
    FirestoreChatService,
    FirestoreTimedOutService,
    FirestoreFavouritesService,
    FirestoreLoginService,
    FirestoreMarkersService,
    StorageBaseService,
    AuthEventService,
    AuthAdminService,
    AuthTicketService,
    AuthChatService,
    AuthTimedOutService,
    AuthFavouritesService,
    AuthLoginService,
    AuthMarkersService,
    FunctionsEventService,
    FunctionsAdminService,
    FunctionsTicketService,
    FunctionsChatService,
    FunctionsTimedOutService,
    FunctionsFavouritesService,
    FunctionsLoginService,
    FunctionsMarkersService,
    MessagingEventService,
    MessagingAdminService,
    MessagingTicketService,
    MessagingChatService,
    MessagingTimedOutService,
    MessagingFavouritesService,
    MessagingLoginService,
    MessagingMarkersService
} from '@bn8-database/db-connection.database'

@Injectable({
    providedIn: 'root'
})
export class FirebaseClient  {

    private connection: any

    constructor(
        private aefs:FirestoreEventService,
        private aafs:FirestoreAdminService,
        private atfs:FirestoreTicketService,
        private acfs:FirestoreChatService,
        private atofs:FirestoreTimedOutService,
        private affs:FirestoreFavouritesService,
        private alfs:FirestoreLoginService,
        private amfs:FirestoreMarkersService,
        private store:StorageBaseService,
        private aeas:AuthEventService,
        private aaas:AuthAdminService,
        private atas:AuthTicketService,
        private acas:AuthChatService,
        private atoas:AuthTimedOutService,
        private afas:AuthFavouritesService,
        private alas:AuthLoginService,
        private amas:AuthMarkersService,
        private aefun:FunctionsEventService,
        private aafun:FunctionsAdminService,
        private atfun:FunctionsTicketService,
        private acfun:FunctionsChatService,
        private atofun:FunctionsTimedOutService,
        private affun:FunctionsFavouritesService,
        private alfun:FunctionsLoginService,
        private amfun:FunctionsMarkersService,
        private aems:MessagingEventService,
        private aams:MessagingAdminService,
        private atms:MessagingTicketService,
        private acms:MessagingChatService,
        private atoms:MessagingTimedOutService,
        private afms:MessagingFavouritesService,
        private alms:MessagingLoginService,
        private amms:MessagingMarkersService
    ) {}

    initializeApp() {
        this.connection = {
            FSlogin: this.alfs,
            FSevents: this.aefs,
            FSadmin: this.aafs,
            FSticket: this.atfs,
            FSchat: this.acfs,
            FStimedOut: this.atofs,
            FSfavourites: this.affs,
            FSmarkers: this.amfs,
            Storage: this.store,
            Authlogin: this.alas,
            Authevents: this.aeas,
            Authadmin: this.aaas,
            Authticket: this.atas,
            Authchat: this.acas,
            AuthtimedOut: this.atoas,
            Authfavourites: this.afas,
            Authmarkers: this.amas,
            Funlogin: this.alfun,
            Funevents: this.aefun,
            Funadmin: this.aafun,
            Funticket: this.atfun,
            Funchat: this.acfun,
            FuntimedOut: this.atofun,
            Funfavourites: this.affun,
            Funmarkers: this.amfun,
            MSlogin: this.alms,
            MSevents: this.aems,
            MSadmin: this.aams,
            MSticket: this.atms,
            MSchat: this.acms,
            MStimedOut: this.atoms,
            MSfavourites: this.afms,
            MSmarkers: this.amms,
        }
    } 

    afs(db?:string) {
        return (this.connection[`FS${db ? db:database.connections.login}`] as AngularFirestore)
    }

    afAuth(db?:string) {                
        return (this.connection[`Auth${db ? db:database.connections.login}`] as AngularFireAuth)
    }

    afFun(db?:string) {
        return (this.connection[`Fun${db ? db:database.connections.login}`] as AngularFireFunctions)
    }

    afm(db?:string) {  
        return (this.connection[`MS${db ? db:database.connections.login}`] as AngularFireMessaging)
    }

    storage() {
        return this.connection.Storage as AngularFireStorage
    }

    collection$(path, data:{query?, db?: string}) {
        return this.afs(data.db)
            .collection(path, data.query)
            .snapshotChanges()
            .pipe(
                map(actions => {
                    return actions.map(a => {
                        return { id: a.payload.doc.id, ...a.payload.doc.data() }
                    })
                })
            )
    }

    docRef(path:string,db?:string) {
        return this.afs(db)
        .doc(path)
    }

    doc$(path: string, db?: string): Observable<any> {
        return this.afs(db)
            .doc(path)
            .snapshotChanges()
            .pipe(
                map(doc => {
                    return { id: doc.payload.id, ...doc.payload.data() }
                })
            )
    }

    createId(db:string) {
        return this.afs(db).createId()
    }

    updateAt(path: string, data: Object, db?: string): Promise<any> {
        const segments = path.split('/').filter(v => v)
        if (segments.length % 2)
            return this.afs(db).collection(path).add(data)
        else //Add updatedAt to data Stream if doc
            return this.afs(db).doc(path).set({ ...data, updatedAt: new Date() }, { merge: true })
    }

    delete(path: string, db?: string) {
        const segments = path.split('/').filter(v => v)
        //mark doc as deleted
        if (!(segments.length % 2))
            this.updateAt(path, { deleted: true, deletedAt: new Date() }, db)
    }
}