import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { BansPage } from '@bn8-imports/imports.views'
import { BansRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    BansRoutingModule
  ],
  declarations: [BansPage]
})
export class BansPageModule {}