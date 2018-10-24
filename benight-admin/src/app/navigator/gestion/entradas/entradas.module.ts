import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { EntradasPage,DetalleInfoEntradaPage } from '@bn8-imports/imports.views'
import { EntradasRoutingModule} from '@bn8-imports/imports.routing'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    EntradasRoutingModule
  ],
  declarations: [EntradasPage, DetalleInfoEntradaPage]
})
export class EntradasPageModule {}