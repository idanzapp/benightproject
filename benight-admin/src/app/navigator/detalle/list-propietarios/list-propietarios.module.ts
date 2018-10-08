import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ListPropietariosPage } from './list-propietarios.page'
import { ListPropietariosRoutingModule } from './list-propietarios-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ListPropietariosRoutingModule
  ],
  declarations: [ListPropietariosPage]
})
export class ListPropietariosPageModule {}
