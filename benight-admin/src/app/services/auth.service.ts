import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { auth } from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'

import { Observable, of } from 'rxjs'
import { switchMap, take, map, shareReplay, combineLatest } from 'rxjs/operators'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'

import { Facebook } from '@ionic-native/facebook/ngx'
import { Platform } from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>
  private admin$: Observable<any>

  afAuth: AngularFireAuth

  constructor(
    private fireclient: FirebaseClient,
    private router: Router,
    private facebook: Facebook,
    private platform: Platform
  ) {
    this.afAuth = fireclient.afAuth(database.connections.login)
    this.admin$ = this.afAuth.authState.pipe(
      switchMap(user => (user ? fireclient.doc$(`${database.tableNames.admins}/${user.uid}`) : of(null))),
      take(1),
      shareReplay(1)
      )
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => (user ? fireclient.doc$(`${database.tableNames.users}/${user.uid}`) : of(null))),
      take(1),
      shareReplay(1)
      )
  }

  user() {          
    return this.user$.pipe(
      map(({uid, displayName, appear, balance, banned, birthday, email, gender, photoUrl}) => 
      ({uid, displayName, appear, balance, banned, birthday, email, gender, photoUrl})
      ),
      combineLatest(this.admin$.pipe(
        map(({paymentAccount,availableTest,code}) => 
        ({paymentAccount,availableTest,code}))
      )),
      shareReplay(1)
    )
  }

  alias() {
    return this.user$.pipe(
      map(u => u && u.aliasList),
      shareReplay(1)
    )    
    //.toPromise()
  }

  uid() {
    return this.admin$
      .pipe(
        map(u => u && u.uid),
        shareReplay(1)
      )
      //.toPromise()
  }

  permissions() {
    return this.admin$
      .pipe(
        map(u => u && u.permissions),
        shareReplay(1)
      )
      //.toPromise()
  }

  upgrades() {
    return this.admin$
      .pipe(
        map(u => u && u.upgrades),
        shareReplay(1)
      )
      //.toPromise()
  }

  default() {
    return this.admin$
      .pipe(
        map(u => u && u.default),
        shareReplay(1)
      )
      //.toPromise()
  }

  bans() {
    return this.admin$
      .pipe(
        map(u => u && u.bans),
        shareReplay(1)
      )
      //.toPromise()
  }

  vips() {
    return this.admin$
      .pipe(
        map(u => u && u.vips),
        shareReplay(1)
      )
      //.toPromise()
  }

  moderators() {
    return this.admin$
      .pipe(
        map(u => u && u.moderators),
        shareReplay(1)
      )
      //.toPromise()
  }

  locations() {
    return this.admin$
      .pipe(
        map(u => u && u.locations),
        map(u => u && u.eid),
        shareReplay(1)
      )
  }

  employees() {
    return this.admin$
      .pipe(
        map(u => u && u.employees),
        map(u => u && u.eid),
        shareReplay(1)
      )
  }

  plans() {
    return this.admin$
      .pipe(
        map(u => u && u.plans),
        map(u => u && u.eid),
        shareReplay(1)
      )
  }

  tickets() {
    return this.admin$
      .pipe(
        map(u => u && u.employees),
        map(u => u && u.eid),
        shareReplay(1)
      )
  }

  events() {
    return this.admin$
      .pipe(
        map(u => u && u.employees),
        map(u => u && u.eid),
        shareReplay(1)
      )
  }

  private updateUserData({ uid, email, displayName, photoURL }) {
    return this.fireclient.updateAt(`${database.tableNames.admins}/${uid}`, { uid, email, displayName, photoURL })
  }

  private createUser({ uid, email, displayName, photoURL }) {
    return this.fireclient.createAt(`${database.tableNames.admins}/${uid}`, { ...defaultUser, uid, email, displayName, photoURL })
  }
  private updateAdminData({ uid, email, displayName, photoURL }) {
    return this.fireclient.updateAt(`${database.tableNames.admins}/${uid}`, { uid, email, displayName, photoURL })
  }

  private createAdmin({ uid, email, displayName, photoURL }) {
    return this.fireclient.createAt(`${database.tableNames.admins}/${uid}`, { ...defaultUser, uid, email, displayName, photoURL })
  }

  async signOut() {
    await this.afAuth.auth.signOut()
    return this.router.navigate(['/'])
  }

  async facebookLogin() {
    try {
      let user
      if (this.platform.is('cordova')) {
        user = await this.nativeFacebookLogin()
      } else {
        const provider = new auth.FacebookAuthProvider()
        user = await this.afAuth.auth.signInWithPopup(provider)
      }

      if (user.additionalUserInfo.isNewUser) {
        //Nuevo Usuario       
        await this.createUser(user)
        return this.router.navigate(['/'])
      } else {
        //mantiene los datos 
        await this.updateUserData(user.user)
        return this.router.navigate(['/'])
      }
    } catch (err) {
      console.log(err)
    }
  }

  async nativeFacebookLogin(): Promise<any> {
    const facebook = await this.facebook.login(["email", "public_profile"])

    return await this.afAuth.auth.signInWithCredential(
      auth.FacebookAuthProvider.credential(facebook.authResponse.accessToken)
    )
  }
}

const defaultUser = {
  appear: false,
  balance: 0,
  banned: false,
  birthday: new Date(),//quitarlo despues de pedir cumple a face
  gender: 'chico',//pedir a face
  permissions: [],
  invited: [],
  friends: []
}