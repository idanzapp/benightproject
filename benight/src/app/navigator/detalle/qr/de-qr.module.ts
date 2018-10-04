import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { QrPage } from './de-qr.page'
import { QrRoutingModule } from './de-qr-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    QrRoutingModule
  ],
  declarations: [QrPage]
})
export class QrPageModule {}
