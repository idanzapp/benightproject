import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FireFormDirective ,FirebaseProviders, ClientProvider} from '@bn8-imports/imports.database'
import { myAppModules } from '@bn8-imports/imports.main'
import { myAppProviders } from '@bn8-imports/imports.providers'
import { ChartsModule } from 'ng2-charts'

@NgModule({
  declarations: [AppComponent, FireFormDirective],
  entryComponents: [],
  imports: [
    ...myAppModules,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [
    ...myAppProviders,
    ...ClientProvider,
    ...FirebaseProviders    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
