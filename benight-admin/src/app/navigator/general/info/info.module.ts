import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { InfoPage } from './info.page'
import { InfoRoutingModule } from './info-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    InfoRoutingModule
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}