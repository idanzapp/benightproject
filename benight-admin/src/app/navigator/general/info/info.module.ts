import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { InfoPage } from './info.page'
import { InfoRoutingModule } from './info-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    InfoRoutingModule
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}