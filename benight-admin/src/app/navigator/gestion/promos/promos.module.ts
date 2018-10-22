import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { PromosPage } from './promos.page'
import { PromosRoutingModule } from './promos-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    PromosRoutingModule
  ],
  declarations: [PromosPage]
})
export class PromosPageModule {}