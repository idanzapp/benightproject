import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireFunctions } from '@angular/fire/functions'
import { AngularFireMessaging } from '@angular/fire/messaging'

import { Observable } from 'rxjs'
import { map, switchMap, reduce } from 'rxjs/operators'

import { database } from '@bn8-constants/constants.database'
import { 
    FirestoreEventService,
    FirestoreAdminService,
    FirestoreTicketService,
    FirestoreChatService,
    FirestoreLoginService,
    FirestoreMarkersService,
    AuthEventService,
    AuthAdminService,
    AuthTicketService,
    AuthChatService,
    AuthLoginService,
    AuthMarkersService,
    FunctionsEventService,
    FunctionsAdminService,
    FunctionsTicketService,
    FunctionsChatService,
    FunctionsLoginService,
    FunctionsMarkersService,
    MessagingEventService,
    MessagingAdminService,
    MessagingTicketService,
    MessagingChatService,
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
        private alfs:FirestoreLoginService,
        private amfs:FirestoreMarkersService,
        private aeas:AuthEventService,
        private aaas:AuthAdminService,
        private atas:AuthTicketService,
        private acas:AuthChatService,
        private alas:AuthLoginService,
        private amas:AuthMarkersService,
        private aefun:FunctionsEventService,
        private aafun:FunctionsAdminService,
        private atfun:FunctionsTicketService,
        private acfun:FunctionsChatService,
        private alfun:FunctionsLoginService,
        private amfun:FunctionsMarkersService,
        private aems:MessagingEventService,
        private aams:MessagingAdminService,
        private atms:MessagingTicketService,
        private acms:MessagingChatService,
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
            FSmarkers: this.amfs,
            Authlogin: this.alas,
            Authevents: this.aeas,
            Authadmin: this.aaas,
            Authticket: this.atas,
            Authchat: this.acas,
            Authmarkers: this.amas,
            Funlogin: this.alfun,
            Funevents: this.aefun,
            Funadmin: this.aafun,
            Funticket: this.atfun,
            Funchat: this.acfun,
            Funmarkers: this.amfun,
            MSlogin: this.alms,
            MSevents: this.aems,
            MSadmin: this.aams,
            MSticket: this.atms,
            MSchat: this.acms,
            MSmarkers: this.amms,
        }
    } 

    afs(db?:string) {
        return (this.connection[`FS${db ? db:database.DB_CON_LOGIN}`] as AngularFirestore)
    }

    afAuth(db?:string) {                
        return (this.connection[`Auth${db ? db:database.DB_CON_LOGIN}`] as AngularFireAuth)
    }

    afFun(db?:string) {
        return (this.connection[`Fun${db ? db:database.DB_CON_LOGIN}`] as AngularFireFunctions)
    }

    afm(db?:string) {  
        return (this.connection[`MS${db ? db:database.DB_CON_LOGIN}`] as AngularFireMessaging)
    }

    collection$(path, query?, db?: string) {
        return this.afs(db)
            .collection(path, query)
            .snapshotChanges()
            .pipe(
                map(actions => {
                    return actions.map(a => {
                        return { id: a.payload.doc.id, ...a.payload.doc.data() }
                    })
                })
            )
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

    leftJoin(path1:string,ref1:any,db1:string,path2:string,db2:string,commonField:string,op:string){
        let conn1 = db1 ? db1 : database.DB_CON_LOGIN
        let conn2 = db2 ? db2 : database.DB_CON_LOGIN
        return this.collection$(path1, ref1, conn1).pipe(
            switchMap((value) => {
                let table
                table.push(value.forEach(element => {
                    return element[commonField]
                }))
                return table
            }),
            reduce((value,current) => `${value} | ${current}` ),
            switchMap((value) => {
                return this.collection$(path2, ref => ref.where(commonField,op,value), conn2)
            })
        )
    }

    updateAt(path: string, data: Object, db?: string): Promise<any> {
        const segments = path.split('/').filter(v => v)
        if (segments.length % 2)
            return this.afs(db).collection(path).add(data)
        else //Add updatedAt to data Stream if doc
            return this.afs(db).doc(path).set({ ...data, updatedAt: new Date() }, { merge: true })
    }

    createAt(path: string, data: Object, db?: string) {
        //Add createdAt to data Stream if doc and call updatedAt
        const segments = path.split('/').filter(v => v)
        if (!(segments.length % 2))
            data = { ...data, createdAt: new Date() }
        this.updateAt(path, data, db)
    }

    delete(path: string, db?: string) {
        const segments = path.split('/').filter(v => v)
        //mark doc as deleted
        if (!(segments.length % 2))
            this.updateAt(path, { deleted: true, deletedAt: new Date() }, db)
    }
}