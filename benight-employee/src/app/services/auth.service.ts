import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { auth } from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'

import { Observable, of } from 'rxjs'
import { switchMap, take, map , shareReplay} from 'rxjs/operators'
import { DbService } from './db.service'

import { Facebook } from '@ionic-native/facebook/ngx'
import { Platform } from '@ionic/angular'

import { LoadingController } from '@ionic/angular'
import { Storage } from '@ionic/storage'

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
    private platform: Platform,
    private loadingController: LoadingController,
    private storage: Storage
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => (user ? db.doc$(`users/${user.uid}`) : of(null))),
      shareReplay(1)
    )

    if (platform.is('pwa')) {
      this.handleRedirect()
    }
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

  async anonymousLogin() {
    const credential = await this.afAuth.auth.signInAnonymously()
    return await this.updateUserData(credential.user)
  }

  private updateUserData({ uid, email, displayName, photoURL, isAnonymous }) {
    // Sets user data to firestore on login

    const path = `users/${uid}`

    const data = {
      uid,
      email,
      displayName,
      photoURL,
      isAnonymous
    }

    return this.db.updateAt(path, data)
  }

  async signOut() {
    await this.afAuth.auth.signOut()
    return this.router.navigate(['/'])
  }

  //// Facebook AUTH

  setRedirect(val) {
    this.storage.set('BN8-authRedirect', val)
  }

  async isRedirect() {
    return await this.storage.get('BN8-authRedirect')
  }

  async facebookLogin() {
    try {
      let user

      if (this.platform.is('cordova')) {
        user = await this.nativeFacebookLogin()
      } else {
        await this.setRedirect(true)
        const provider = new auth.FacebookAuthProvider()
        user = await this.afAuth.auth.signInWithRedirect(provider)
      }

      return await this.updateUserData(user)
    } catch (err) {
      console.log(err)
    }
  }

  // Handle login with redirect for web Facebook auth
  private async handleRedirect() {
    if ((await this.isRedirect()) !== true) {
      return null
    }
    const loading = await this.loadingController.create()
    await loading.present()

    const result = await this.afAuth.auth.getRedirectResult()

    if (result.user) {
      await this.updateUserData(result.user)
    }

    await loading.dismiss()

    await this.setRedirect(false)

    return result
  }

  async nativeFacebookLogin(): Promise<any> {
    const facebook = await this.facebook.login(["email", "public_profile"])
  
    return await this.afAuth.auth.signInWithCredential(
      auth.FacebookAuthProvider.credential( facebook.authResponse.accessToken)
    )
  }
}