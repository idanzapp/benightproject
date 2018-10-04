// Base Modules
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

export const myBaseModules = [
    CommonModule,
    FormsModule,
    IonicModule
]

//Angular Firebase Modules
import { environment } from '@bn8-environments/environment'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireFunctionsModule } from '@angular/fire/functions'
import { AngularFireMessagingModule } from '@angular/fire/messaging'

export const FirebaseModules = [
    AngularFireModule.initializeApp(environment.firebase_login),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule

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
import { SharedDataService } from '@bn8-services/shared-data.service'
//
export const myAppProviders = [
    Firebase,
    StatusBar,
    SplashScreen,
    SharedDataService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
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


/*export * from './eventos/eventos.module'
export * from './entradas/entradas.module'
export * from './chat/chat.module'
export * from './notificaciones/notificaciones.module'
export * from './perfil/perfil.module'*/

/*
// Navigator Routing
export * from './navigator.page'
export * from './eventos/eventos.page'
export * from './entradas/entradas.page'
export * from './chat/chat.page'
export * from './notificaciones/notificaciones.page'
export * from './perfil/perfil.page' 

// Navigator Module
import { EventosPageModule } from './eventos/eventos.module'
import { EntradasPageModule } from './entradas/entradas.module'
import { ChatPageModule } from './chat/chat.module'
import { NotificacionesPageModule } from './notificaciones/notificaciones.module'
import { PerfilPageModule } from './perfil/perfil.module'


export const myPagesModules = [   
    EventosPageModule,   
    EntradasPageModule,
    ChatPageModule,
    NotificacionesPageModule,
    PerfilPageModule
]*/