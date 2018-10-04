import { NgModule } from '@angular/core'
import {RouterModule} from '@angular/router'

import { coreComponents, myBaseModules } from '@bn8-core/imports'

@NgModule({
  imports: [
    ...myBaseModules,
    RouterModule
  ],
  declarations: [...coreComponents],
  exports: [...coreComponents]
})
export class CoreModule { }
