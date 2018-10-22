import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetallePage} from '@bn8-imports/imports.views'

import { DetalleRoutingModule } from './detalle-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    DetalleRoutingModule
  ],
  declarations: [DetallePage]
})
export class DetallePageModule {}