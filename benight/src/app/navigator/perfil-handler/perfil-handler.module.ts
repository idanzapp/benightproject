import { NgModule } from '@angular/core'
import { myBaseModules } from  '@bn8-core/imports'
import { CoreModule } from  '@bn8-core/core.module'

import { RouterModule } from '@angular/router'
import { PerfilHandlerRoutingModule } from './perfil-handler-routing.module'
import { PerfilHandlerPage } from './perfil-handler.page'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    PerfilHandlerRoutingModule,
  ],
  declarations: [PerfilHandlerPage]
})
export class PerfilHandlerPageModule {}
