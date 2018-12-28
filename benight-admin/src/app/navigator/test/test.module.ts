import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { TestPage } from '@bn8-imports/imports.views'
import { TestRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    TestRoutingModule
  ],
  declarations: [TestPage]
})
export class TestPageModule {}