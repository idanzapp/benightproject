import { NgModule } from '@angular/core'

import { myBaseModules, GeneralPage, GestionPage} from '@bn8-core/imports'

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
