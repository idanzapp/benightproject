import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { DetalleInfoPage } from './detalle-info.page'
import { DetalleInfoRoutingModule } from './detalle-info-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    DetalleInfoRoutingModule
  ],
  declarations: [DetalleInfoPage]
})
export class DetalleInfoPageModule {}
