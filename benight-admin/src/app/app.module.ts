import { NgModule, APP_INITIALIZER } from '@angular/core'

import { myAppProviders, myAppModules,/* FirebaseModules, FirebaseProviders*/} from '@bn8-core/imports'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FireFormDirective } from './directives/fire-form.directive'
import { FirebaseClient } from '@bn8-services/firebase-client.service'

import { Facebook } from '@ionic-native/facebook/ngx'

/*function init_client(loadClient: FirebaseClient) {
  return () => loadClient.initializeApp()
}*/

@NgModule({
  declarations: [AppComponent, FireFormDirective],
  entryComponents: [],
  imports: [
    ...myAppModules,
    //...FirebaseModules,
    AppRoutingModule
  ],
  providers: [
    ...myAppProviders,
    /*FirebaseClient,
    { provide: APP_INITIALIZER, useFactory: init_client, deps: [FirebaseClient], multi: true },*/
    Facebook,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
