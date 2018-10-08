import { NgModule } from '@angular/core'
import {RouterModule} from '@angular/router'

import { coreComponents, myBaseModules } from '@bn8-core/imports'
import { Bn8RouterOutlet } from '../directives/bn8-router-outlet.directive'

@NgModule({
  imports: [
    ...myBaseModules,
    RouterModule
  ],
  declarations: [...coreComponents,Bn8RouterOutlet],
  exports: [...coreComponents,Bn8RouterOutlet]
})
export class CoreModule { }
