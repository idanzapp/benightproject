import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { EntradasPage } from './entradas.page'
import { EntradasRoutingModule } from './entradas-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    EntradasRoutingModule
  ],
  declarations: [EntradasPage]
})
export class EntradasPageModule {}
