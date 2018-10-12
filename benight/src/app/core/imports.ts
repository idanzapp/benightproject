// Base Modules
import { PLATFORM_ID, NgZone } from '@angular/core'
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

import { 
    FirestoreEventService,
    AngularFireEventFactory,
    FirestoreTicketService,
    AngularFireTicketFactory,
    FunctionsEventService,
    AngularFireFunctionsEventFactory,
    FunctionsTicketService,
    AngularFireFunctionsTicketFactory ,
    MessagingEventService,
    AngularFireMessagingEventFactory,
    MessagingTicketService,
    AngularFireMessagingTicketFactory    
  } from '@bn8-services/db-extension.service'

 export {FirestoreEventService, FirestoreTicketService} from '@bn8-services/db-extension.service'

  //Login db by default
export const FirebaseModules = [
    AngularFireModule.initializeApp(environment.firebase_login),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule

]

export const FirebaseProviders = [
    { provide: FirestoreEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireEventFactory },    
    { provide: FirestoreTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireTicketFactory },
    { provide: FunctionsEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireFunctionsEventFactory },    
    { provide: FunctionsTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireFunctionsTicketFactory },
    { provide: MessagingEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireMessagingEventFactory },    
    { provide: MessagingTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireMessagingTicketFactory },
    

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

//Views import
 
//export * from '@bn8-navigator/chat/chat.page'
//export * from '@bn8-navigator/detalle/detalle.page'
//export * from '@bn8-navigator/general/general.page'
//export * from '@bn8-navigator/gestion/gestion.page'
//export * from '@bn8-navigator/notificaciones/notificaciones.page'
//export * from '@bn8-navigator/navigator.page'