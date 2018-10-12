import { Injectable } from '@angular/core'
//import { AuthService } from '@bn8-services/auth.service'
import { AngularFirestore } from '@angular/fire/firestore'
import { FirestoreEventService, FirestoreAdminService, FirestoreTicketService } from '@bn8-core/imports'

import { Observable, of } from 'rxjs'
import { map , switchMap, shareReplay, reduce, scan} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private afs: AngularFirestore,
    private afse: FirestoreEventService,
    private afsa: FirestoreAdminService,
    private afst: FirestoreTicketService,
    //private auth:AuthService
  ) { }
  
  private getDb(db?): AngularFirestore {
    let connectTO
    if (db)
      switch (db) {
        case 'admin':
          connectTO = this.afsa
          break
        case 'ticket':
          connectTO = this.afst
          break
        case 'event':
          connectTO = this.afse
          break
        default:
          connectTO = this.afs
          break
      }
    else
      connectTO = this.afs
    return   (connectTO as AngularFirestore)
  }
  
  collection$(path:string, query?, db?:string) {    
    return this.getDb(db)
      .collection(path, query)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            return {id: a.payload.doc.id, ...a.payload.doc.data()}
          })
        })
      )
  }
  
  doc$(path:string, db?:string): Observable<any> {
    return this.getDb(db)
      .doc(path)
      .snapshotChanges()
      .pipe(
        map(doc => {
          return {id: doc.payload.id, ...doc.payload.data()}
        })
      )
  }

  async leftJoin(path1,path2,field1,field2,cmp,db1,db2) {
    let query = ''
    //seek the id's that belongs to the user
    return this.collection$(path1,ref => ref.where(field1,'==',cmp),db1).pipe(
        //it makes the list of of uids separated by |
        scan((acc,curr) => query = `${query} | ${curr[field2]}`,{}), 
        switchMap( () => {          
          //substring remove the 1st ' |' of the query
          return  this.collection$(path2,ref => ref.where(field2,'==',query.substring(2, query.length)),db2)
        })       
  )}

  updateAt(path:string, data:Object, db?:string):Promise<any> {
    let connectTO = this.getDb(db)    
    const segments = path.split('/').filter(v => v)
    if (segments.length % 2 ) 
      return connectTO.collection(path).add(data)
    else //Add updatedAt to data Stream if doc
      return connectTO.doc(path).set({...data,updatedAt: new Date().toISOString}, {merge: true})    
  }

  createAt(path:string, data:Object, db?:string) {
    //Add createdAt to data Stream if doc and call updatedAt
    const segments = path.split('/').filter(v => v)
    if (!(segments.length % 2))
      this.updateAt(path,{...data,createdAt: new Date().toISOString},db)
  }

  delete(path:string, db?:string) {
    const segments = path.split('/').filter(v => v)
    //mark doc as deleted
    if (!(segments.length % 2))
      this.updateAt(path,{deleted: true,deletedAt: new Date().toISOString},db)
  }

  ngOnInit() {
  }
}


//1st attemp to do left join
    /*this.auth.user$.pipe(
        //modificar ownerUid para que pueda tener varios propietarios
        switchMap(user => {
          //Toma todos los documentos de user.uid 
          return this.collection$(path1,ref => 
            ref.where(field,'==',user.uid)
          ,db1)
        }), 
        scan((acc, curr) => Object.assign({}, acc, this.doc$(`${path2}/${curr}`,db2)), {}),         
        //reduce((acc,curr) =>  {
          //añade a collectionData todos los documentos
        //  Object.assign({}, acc, this.doc$(`${path2}/${curr}`,db2))
        //  return this.doc$(`${path2}/${curr}`,db2)            
        //}),
        shareReplay(1)
    )*/
      //return collectionData