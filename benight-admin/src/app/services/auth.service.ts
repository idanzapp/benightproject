import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { auth } from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'

import { Observable, of } from 'rxjs'
import { switchMap, take, map , shareReplay} from 'rxjs/operators'
import { DbService } from './db.service'

import { Facebook } from '@ionic-native/facebook/ngx'
import { Platform } from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>

  constructor(
    private afAuth: AngularFireAuth,
    private db: DbService,
    private router: Router,
    private facebook: Facebook,
    private platform: Platform
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => (user ? db.doc$(`users/${user.uid}`) : of(null))),
      shareReplay(1)
    )
  }

  uid() {
    return this.user$
      .pipe(
        take(1),
        map(u => u && u.uid),
        shareReplay(1)
      )
      .toPromise()
  }  

  permission() {
    return this.user$
      .pipe(
        take(1),
        map(u => u && u.permissions),
        shareReplay(1)
      )
      .toPromise()
  }

  private updateUserData({ uid, email, displayName, photoURL }) {
    // Sets user data to firestore on login
    const path = `users/${uid}`
    const data = {
      uid,
      email,
      displayName,
      photoURL
    }

    return this.db.updateAt(path, data)
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
      
      if(user.additionalUserInfo.isNewUser) {
        //si es un nuevo usuario, crea datos por defecto, y crea al usuario
        user = {
          ...user.user,
          appear:false,
          balance:0,
          banned:false,
          birthday: new Date(),//quitarlo despues de pedir cumple a face
          gender:'chico',//pedir a face
          permissions: [],
          invited: [],
          friends: []
        }
        await this.db.createAt(`users`, user)
        return this.router.navigate(['/'])
      } else {
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
      auth.FacebookAuthProvider.credential( facebook.authResponse.accessToken)
    )
  }
}