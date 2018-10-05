import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { GeneralPage } from './general.page'
import { GeneralRoutingModule } from './general-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    GeneralRoutingModule
  ],
  declarations: [GeneralPage]
})
export class GeneralPageModule {}
