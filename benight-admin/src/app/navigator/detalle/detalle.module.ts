import { NgModule } from '@angular/core'

import { myBaseModules, DetallePage} from '@bn8-core/imports'

import { DetalleRoutingModule } from './detalle-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    DetalleRoutingModule
  ],
  declarations: [DetallePage]
})
export class DetallePageModule {}
