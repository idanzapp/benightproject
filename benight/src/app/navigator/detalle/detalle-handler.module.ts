import { NgModule } from '@angular/core'

import { DetalleHandlerPage } from './detalle-handler.page'
import { DetalleHandlerRoutingModule } from './detalle-handler-routing.module'

import { myBaseModules } from '@bn8-core/imports'
import { CoreModule} from '@bn8-core/core.module'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    DetalleHandlerRoutingModule
  ],
  declarations: [DetalleHandlerPage]
})
export class DetalleHandlerPageModule {}
