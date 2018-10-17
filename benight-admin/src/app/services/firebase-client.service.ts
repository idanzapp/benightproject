import { Injectable } from '@angular/core'

import { environment } from '@bn8-environments/environment'

import { AngularFireModule,  AngularFirestore, AngularFireAuth, AngularFireMessaging, AngularFireFunctions} from '@bn8-core/imports'

import { Observable } from 'rxjs'
import { map, switchMap, reduce } from 'rxjs/operators'

import * as geofirex from 'geofirex'
import { firestore, database, languages } from '@bn8-database/interfaces'

@Injectable({
    providedIn: 'root'
})
export class FirebaseClient  {

    private connection: Object

    constructor() {}

    initializeApp() {
        let events
        if (navigator.language)
            switch (navigator.language) {
                case languages.es:
                    events = environment.firebase_es_ES
                    break
                case languages.fr:
                    events = environment.firebase_fr_FR
                    break
                case languages.pt:
                    events = environment.firebase_pt_PT
                    break
                default:
                    events = environment.firebase_en_EN
            }
        else
            events = environment.firebase_en_EN
        this.connection = {
            login: AngularFireModule.initializeApp(environment.firebase_login),
            events: AngularFireModule.initializeApp(events, database.DB_CON_EVENTS),
            admin: AngularFireModule.initializeApp(environment.firebase_base,  database.DB_CON_ADMIN),
            ticket: AngularFireModule.initializeApp(environment.firebase_ticket,  database.DB_CON_TICKET),
            markers: geofirex.init(AngularFireModule.initializeApp(environment.firebase_base,  database.DB_CON_MARKERS) as firestore.FirebaseApp)
        }
        console.log('initialized')
    }

    afs(db?:string) {
        return (this.connection[db ? db:database.DB_CON_LOGIN].firestore() as AngularFirestore)
    }

    afAuth(db?:string) {
        return ( this.connection[db ? db:database.DB_CON_LOGIN].auth() as AngularFireAuth)
    }

    afFun(db?:string) {
        return (this.connection[db ? db:database.DB_CON_LOGIN].functions() as AngularFireFunctions)
    }

    afm(db?:string) {  
        return (this.connection[db ? db:database.DB_CON_LOGIN].messaging() as AngularFireMessaging)
    }

    formatQuery(query, doc, property) {
        return doc[property] ? `${query} | ${doc[property]}` : query
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
            reduce(value => query = this.formatQuery(query, value, field2), {}),
            switchMap(() => {
                //substring remove the 1st ' |' of the query
                return this.collection$(path2, ref => ref.where(field2, '==', query.substring(2, query.length)), db2)
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