import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { ClientProvider} from '@bn8-imports/imports.database'
import { myAppModules } from '@bn8-imports/imports.main'
import { myAppProviders } from '@bn8-imports/imports.providers'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    ...myAppModules,
    AppRoutingModule
  ],
  providers: [
    ...myAppProviders,
    ...ClientProvider    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
