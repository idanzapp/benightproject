import { NgModule } from '@angular/core'

import { NavigatorPage } from './navigator.page'
import { NavigatorRoutingModule } from './navigator-routing.module'

import { myBaseModules} from '@bn8-core/imports'
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
