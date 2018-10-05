import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { PerfilPage } from './perfil.page'
import { PerfilRoutingModule } from './perfil-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    PerfilRoutingModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
