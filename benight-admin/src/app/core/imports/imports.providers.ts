import { APP_INITIALIZER } from '@angular/core'
import { RouteReuseStrategy } from '@angular/router'
import { IonicRouteStrategy } from '@ionic/angular'
//
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
//
import { DataFeedService } from '@bn8-services/data-feed.service'
//
import { Facebook } from '@ionic-native/facebook/ngx'

export const myAppProviders = [
    StatusBar,
    SplashScreen,
    DataFeedService,
    Facebook,    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
]