import { NgModule } from '@angular/core'
import { myBaseModules } from '@bn8-core/imports'
import { AdsPage } from './ads.page'
import { AdsRoutingModule } from './ads-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    AdsRoutingModule
  ],
  declarations: [AdsPage]
})
export class AdsPageModule {}
