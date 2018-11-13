import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { auth } from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'

import { Observable, of, combineLatest} from 'rxjs'
import { switchMap, take, map, shareReplay } from 'rxjs/operators'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'

import { Facebook } from '@ionic-native/facebook/ngx'
import { Platform } from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$: Observable<any>
  private admin$: Observable<any>

  private afAuth: AngularFireAuth

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
    let user = this.user$.pipe(
    map(u => {
      return {
        uid: u.uid,
        userName: u.displayName,
        appear: u.appear,
        balance: u.balance,
        banned: u.banned,
        birthday: u.birthday,
        email: u.email,
        gender: u.gender,
        photoURL: u.photoURL
      }
    }))
    return combineLatest(
      user,
      this.admin$.pipe(
        map( u => {
          return {
            code: u[0].code,
            displayName: u[0].displayName,
            availableTest: u[0].availableTest,
            paymentAccount: u[0].paymentAccount,          
            uid: u[1].uid,
            userName: u[1].userName,
            appear: u[1].appear,
            balance: u[1].balance,
            banned: u[1].banned,
            birthday: u[1].birthday,
            email: u[1].email,
            gender: u[1].gender,
            photoURL: u[1].photoURL
          }
        }),
        shareReplay(1))
    )
    
  }

  alias() {
    return this.user$.pipe(map(u => u && u.aliasList))    
  }

  uid() {
    return this.user$.pipe(map(u => u && u.uid),shareReplay(1)).toPromise()
  }

  permissions() {
    return this.admin$.pipe(map(u => u && u.permissions))
  }

  upgrades() {
    return this.admin$.pipe(map(u => u && u.upgrades))
  }

  default() {
    return this.admin$.pipe(map(u => u && u.default))
  }

  bans() {
    return this.admin$.pipe(map(u => u && u.bans))
  }

  vips() {
    return this.admin$.pipe(map(u => u && u.vips))
  }

  moderators() {
    return this.admin$.pipe(map(u => u && u.moderatorList))
  }

  locations() {
    return this.admin$.pipe(map(u => u && u.locationList))
  }

  employees() {
    return this.admin$.pipe(map(u => u && u.employeeList))
  }

  plans() {
    return this.admin$.pipe(map(u => u && u.planList))
  }

  tickets() {
    return this.admin$.pipe(map(u => u && u.ticketList))
  }

  private updateUserData({ uid, email, displayName, photoURL }) {
    return this.fireclient.updateAt(`${database.tableNames.admins}/${uid}`, { uid, email, displayName, photoURL })
  }

  private createUser({ uid, email, displayName, photoURL }) {
    return this.fireclient.updateAt(`${database.tableNames.admins}/${uid}`, { ...defaultUser, createdAt: new Date(), uid, email, displayName, photoURL })
  }
  private updateAdminData({ uid, email, displayName, photoURL }) {
    return this.fireclient.updateAt(`${database.tableNames.admins}/${uid}`, { uid, email, displayName, photoURL })
  }

  private createAdmin({ uid, email, displayName, photoURL }) {
    return this.fireclient.updateAt(`${database.tableNames.admins}/${uid}`, { ...defaultUser, createdAt: new Date(), uid, email, displayName, photoURL })
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