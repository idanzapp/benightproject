import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListPropietariosPage } from '@bn8-imports/imports.views'
import { ListPropietariosRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    ListPropietariosRoutingModule
  ],
  declarations: [ListPropietariosPage]
})
export class ListPropietariosPageModule {}