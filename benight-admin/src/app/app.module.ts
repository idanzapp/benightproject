
import { NgModule } from '@angular/core'

import { myAppProviders, myAppModules, FirebaseModules} from '@bn8-core/imports'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    ...myAppModules,
    ...FirebaseModules,
    AppRoutingModule
  ],
  providers: [
    ...myAppProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
