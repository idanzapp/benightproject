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