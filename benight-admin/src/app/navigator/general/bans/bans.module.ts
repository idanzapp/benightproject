import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { BansPage } from './bans.page'
import { BansRoutingModule } from './bans-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    BansRoutingModule
  ],
  declarations: [BansPage]
})
export class BansPageModule {}