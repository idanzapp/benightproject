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
    FirestoreAdminService,
    AngularFireAdminFactory,
    FirestoreTicketService,
    AngularFireTicketFactory,
    FunctionsEventService,
    AngularFireFunctionsEventFactory,
    FunctionsAdminService,
    AngularFireFunctionsAdminFactory,
    FunctionsTicketService,
    AngularFireFunctionsTicketFactory ,
    MessagingEventService,
    AngularFireMessagingEventFactory,
    MessagingAdminService,
    AngularFireMessagingAdminFactory,
    MessagingTicketService,
    AngularFireMessagingTicketFactory    
  } from '@bn8-services/db-extension.service'

 export {FirestoreEventService, FirestoreAdminService, FirestoreTicketService} from '@bn8-services/db-extension.service'

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
    { provide: FirestoreAdminService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireAdminFactory },
    { provide: FirestoreTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireTicketFactory },
    { provide: FunctionsEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireFunctionsEventFactory },
    { provide: FunctionsAdminService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireFunctionsAdminFactory },
    { provide: FunctionsTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireFunctionsTicketFactory },
    { provide: MessagingEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireMessagingEventFactory },
    { provide: MessagingAdminService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireMessagingAdminFactory },
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

/*import {ChatPage} from '@bn8-navigator/chat/chat.page'
import {GeneralPage} from '@bn8-navigator/general/general.page'
import {GestionPage} from '@bn8-navigator/gestion/gestion.page'
import {NotificacionesPage} from '@bn8-navigator/notificaciones/notificaciones.page'
import {NavigatorPage} from '@bn8-navigator/navigator.page'

export const viewPages = [
    ChatPage,
    GestionPage,
    GeneralPage,
    NotificacionesPage,
    NavigatorPage
]*/


//General navigation
/*export * from '@bn8-navigator/general/bans/bans.page'
export * from '@bn8-navigator/general/estadisticas/estadisticas.page'
export * from '@bn8-navigator/general/info/info.page'
export * from '@bn8-navigator/general/preferencias/preferencias.page'

import {EstadisticasPage} from '@bn8-navigator/general/estadisticas/estadisticas.page'
import {BansPage} from '@bn8-navigator/general/bans/bans.page'
import {InfoPage} from '@bn8-navigator/general/info/info.page'
import {PreferenciasPage} from '@bn8-navigator/general/preferencias/preferencias.page'

export const viewGeneralPages = [
    EstadisticasPage,
    BansPage,
    InfoPage,
    PreferenciasPage
]*/


//Gention navigation
/*export * from '@bn8-navigator/gestion/clubs/clubs.page'
export * from '@bn8-navigator/gestion/empleados/empleados.page'
export * from '@bn8-navigator/gestion/entradas/entradas.page'
export * from '@bn8-navigator/gestion/eventos/eventos.page'
export * from '@bn8-navigator/gestion/planes/planes.page'
export * from '@bn8-navigator/gestion/promos/promos.page'

import {ClubsPage} from '@bn8-navigator/gestion/clubs/clubs.page'
import {EmpleadosPage} from '@bn8-navigator/gestion/empleados/empleados.page'
import {EntradasPage} from '@bn8-navigator/gestion/entradas/entradas.page'
import {EventosPage} from '@bn8-navigator/gestion/eventos/eventos.page'
import {PlanesPage} from '@bn8-navigator/gestion/planes/planes.page'
import {PromosPage} from '@bn8-navigator/gestion/promos/promos.page'

export const viewGestionPages = [
    ClubsPage,
    EmpleadosPage,
    EntradasPage,
    EventosPage,
    PlanesPage,
    PromosPage    
]*/