import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetallePage} from '@bn8-imports/imports.views'
import { DetalleRoutingModule} from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    DetalleRoutingModule
  ],
  declarations: [DetallePage]
})
export class DetallePageModule {}