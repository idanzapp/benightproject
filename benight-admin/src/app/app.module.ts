
import { NgModule } from '@angular/core'

import { myAppProviders, myAppModules, FirebaseModules, FirebaseProviders} from '@bn8-core/imports'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';
import { FireFormDirective } from './directives/fire-form.directive'

import { Facebook } from '@ionic-native/facebook/ngx'
import { IonicStorageModule } from '@ionic/storage'

@NgModule({
  declarations: [AppComponent, FireFormDirective],
  entryComponents: [],
  imports: [
    ...myAppModules,
    ...FirebaseModules,
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    ...myAppProviders,
    ...FirebaseProviders,
    Facebook,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
