import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { GaleriaPage } from './galeria.page'
import { GaleriaRoutingModule } from './galeria-routing.page.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    GaleriaRoutingModule
  ],
  declarations: [GaleriaPage]
})
export class GaleriaPageModule {}
