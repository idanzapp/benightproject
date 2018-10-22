import { NgModule } from '@angular/core'

import { NavigatorRoutingModule } from './navigator-routing.module'
import { myBaseModules } from '@bn8-imports/imports.main'
import { NavigatorPage} from '@bn8-imports/imports.views'

@NgModule({
  imports: [
    ...myBaseModules,
    NavigatorRoutingModule,
  ],
  declarations: [NavigatorPage]
})
export class NavigatorPageModule {}