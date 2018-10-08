
import { NgModule } from '@angular/core'

import { myAppProviders, myAppModules, FirebaseModules} from '@bn8-core/imports'
import { CoreModule} from '@bn8-core/core.module'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
//import { Bn8RouterOutlet } from './directives/bn8-router-outlet.directive'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    ...myAppModules,
    ...FirebaseModules,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    ...myAppProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
