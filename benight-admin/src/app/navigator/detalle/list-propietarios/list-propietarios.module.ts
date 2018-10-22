import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListPropietariosPage } from './list-propietarios.page'
import { ListPropietariosRoutingModule } from './list-propietarios-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ListPropietariosRoutingModule
  ],
  declarations: [ListPropietariosPage]
})
export class ListPropietariosPageModule {}