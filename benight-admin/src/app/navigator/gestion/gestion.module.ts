import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { GestionPage } from './gestion.page'
import { GestionRoutingModule } from './gestion-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    GestionRoutingModule
  ],
  declarations: [GestionPage]
})
export class GestionPageModule {}