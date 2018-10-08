import { NgModule } from '@angular/core'

import { NavigatorRoutingModule } from './navigator-routing.module'

import { myBaseModules, NavigatorPage} from '@bn8-core/imports'
import { CoreModule} from '@bn8-core/core.module'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule, 
    NavigatorRoutingModule,
  ],
  declarations: [NavigatorPage]
})
export class NavigatorPageModule {}
