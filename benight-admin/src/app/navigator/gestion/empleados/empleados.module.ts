import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { EmpleadosPage } from '@bn8-imports/imports.views'
import { SearchEmployeesPage } from '@bn8-imports/imports.previews'
import { EmpleadosRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    EmpleadosRoutingModule
  ],
  entryComponents:[SearchEmployeesPage],
  declarations: [EmpleadosPage, SearchEmployeesPage]
})
export class EmpleadosPageModule {}