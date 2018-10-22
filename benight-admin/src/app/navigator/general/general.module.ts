import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-imports/imports.main'
import { GeneralPage} from '@bn8-imports/imports.views'
import { GeneralRoutingModule } from './general-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    GeneralRoutingModule
  ],
  declarations: [GeneralPage]
})
export class GeneralPageModule {}
