import { NgModule } from '@angular/core'
import {RouterModule} from '@angular/router'

import { coreComponents, myBaseModules } from '@bn8-imports/imports.core'

@NgModule({
  imports: [
    ...myBaseModules,
    RouterModule
  ],
  declarations: [...coreComponents],
  exports: [...coreComponents]
})
export class CoreModule { }
