import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { BansPage } from './bans.page'
import { BansRoutingModule } from './bans-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    BansRoutingModule
  ],
  declarations: [BansPage]
})
export class BansPageModule {}