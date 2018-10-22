import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { EntradasPage } from './entradas.page'
import { EntradasRoutingModule } from './entradas-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    EntradasRoutingModule
  ],
  declarations: [EntradasPage]
})
export class EntradasPageModule {}