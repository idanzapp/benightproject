import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-core/imports'
import { PerfilPage } from './perfil.page'
import { PerfilRoutingModule } from './perfil-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    PerfilRoutingModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
