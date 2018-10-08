import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { PromosPage } from './promos.page'
import { PromosRoutingModule } from './promos-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    PromosRoutingModule
  ],
  declarations: [PromosPage]
})
export class PromosPageModule {}