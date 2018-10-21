// Base Modules
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

export const myBaseModules = [
    CommonModule,
    FormsModule,
    IonicModule
]

import { BrowserModule } from '@angular/platform-browser'
//App Modules
export const myAppModules = [
    BrowserModule,
    IonicModule.forRoot()
]

import { RouteReuseStrategy } from '@angular/router'
//
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { Firebase } from '@ionic-native/firebase/ngx'
//
import { DataFeedService } from '@bn8-services/data-feed.service'
//
export const myAppProviders = [
    Firebase,
    StatusBar,
    SplashScreen,
    DataFeedService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
]

import { environment } from '@bn8-environments/environment'
import { languages, database } from '@bn8-database/interfaces'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireFunctionsModule } from '@angular/fire/functions'
import { AngularFireMessagingModule } from '@angular/fire/messaging'

import * as firebase from 'firebase/app'
import * as geofirex from 'geofirex'
firebase.initializeApp(environment.firebase_markers,database.DB_CON_MARKERS)

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

export const FirebaseModules = [
    AngularFireModule.initializeApp(environment.firebase_login, database.DB_CON_LOGIN),
    AngularFireModule.initializeApp(events, database.DB_CON_EVENTS),
    AngularFireModule.initializeApp(environment.firebase_login,database.DB_CON_ADMIN),
    AngularFireModule.initializeApp(environment.firebase_login,database.DB_CON_TICKET),
    geofirex.init(firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule
]

//Core Imports

import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { TabsComponent } from './tabs/tabs.component'
import { PaymentsComponent } from './payments/payments.component'
import { QrComponent } from './qr/qr.component'

export const coreComponents = [
    ProfileComponent,
    LoginComponent,
    TabsComponent,
    PaymentsComponent,
    QrComponent
]

//Views import
 
export * from '@bn8-navigator/chat/chat.page'
export * from '@bn8-navigator/detalle/detalle.page'
export * from '@bn8-navigator/general/general.page'
export * from '@bn8-navigator/gestion/gestion.page'
export * from '@bn8-navigator/notificaciones/notificaciones.page'
export * from '@bn8-navigator/navigator.page'


//GeoQuery
export * from '@bn8-geoquery/point'
export * from '@bn8-geoquery/interfaces'
export * from '@bn8-geoquery/collection'