import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireFunctions } from '@angular/fire/functions'
import { AngularFireMessaging } from '@angular/fire/messaging'

import { Observable } from 'rxjs'
import { map, switchMap, reduce } from 'rxjs/operators'

import { database } from '@bn8-interfaces/interfaces.database'
import { 
    FirestoreEventService,
    FirestoreAdminService,
    FirestoreTicketService,
    FirestoreLoginService,
    FirestoreMarkersService,
    AuthEventService,
    AuthAdminService,
    AuthTicketService,
    AuthLoginService,
    AuthMarkersService,
    FunctionsEventService,
    FunctionsAdminService,
    FunctionsTicketService,
    FunctionsLoginService,
    FunctionsMarkersService,
    MessagingEventService,
    MessagingAdminService,
    MessagingTicketService,
    MessagingLoginService,
    MessagingMarkersService
} from '@bn8-database/db-connection.database'

@Injectable({
    providedIn: 'root'
})
export class FirebaseClient  {

    private connection: Object

    constructor(
        private aefs:FirestoreEventService,
        private aafs:FirestoreAdminService,
        private atfs:FirestoreTicketService,
        private alfs:FirestoreLoginService,
        private amfs:FirestoreMarkersService,
        private aeas:AuthEventService,
        private aaas:AuthAdminService,
        private atas:AuthTicketService,
        private alas:AuthLoginService,
        private amas:AuthMarkersService,
        private aefun:FunctionsEventService,
        private aafun:FunctionsAdminService,
        private atfun:FunctionsTicketService,
        private alfun:FunctionsLoginService,
        private amfun:FunctionsMarkersService,
        private aems:MessagingEventService,
        private aams:MessagingAdminService,
        private atms:MessagingTicketService,
        private alms:MessagingLoginService,
        private amms:MessagingMarkersService
    ) {}

    initializeApp() {
        this.connection = {
            FSlogin: this.alfs,
            FSevents: this.aefs,
            FSadmin: this.aafs,
            FSticket: this.atfs,
            FSmarkers: this.amfs,
            Authlogin: this.alas,
            Authevents: this.aeas,
            Authadmin: this.aaas,
            Authticket: this.atas,
            Authmarkers: this.amas,
            Funlogin: this.alfun,
            Funevents: this.aefun,
            Funadmin: this.aafun,
            Funticket: this.atfun,
            Funmarkers: this.amfun,
            MSlogin: this.alms,
            MSevents: this.aems,
            MSadmin: this.aams,
            MSticket: this.atms,
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

    collection$(path: string, query?, db?: string) {
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

    createId(db) {
        return this.afs(db).createId()
    }

    leftJoin(path1, path2, field1, field2, cmp, db1, db2) {
        let query = ''
        //seek the id's that belongs to the user
        return this.collection$(path1, ref => ref.where(field1, '==', cmp), db1).pipe(
            //it makes the list of uids separated by |
            switchMap((value) => {
                //transform all {id:string}[] Object into a string[]
                let table 
                table.push(value.forEach(element => {
                    return element[field2]
                }))
                return table
            }),
            //create the second query
            reduce((value,current) => `${value} | ${current}` ),
            switchMap(() => {
                return this.collection$(path2, ref => ref.where(field2, '==', query, db2))
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