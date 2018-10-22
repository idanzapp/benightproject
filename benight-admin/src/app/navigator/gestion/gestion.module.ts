import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { GestionPage } from './gestion.page'
import { GestionRoutingModule } from './gestion-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    GestionRoutingModule
  ],
  declarations: [GestionPage]
})
export class GestionPageModule {}