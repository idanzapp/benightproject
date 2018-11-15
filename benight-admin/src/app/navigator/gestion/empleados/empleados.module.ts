import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { EmpleadosPage } from '@bn8-imports/imports.views'
import { EmpleadosRoutingModule } from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    EmpleadosRoutingModule
  ],
  declarations: [EmpleadosPage]
})
export class EmpleadosPageModule {}