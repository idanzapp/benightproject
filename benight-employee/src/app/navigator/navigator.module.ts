import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { NavigatorPage } from './navigator.page'
import { NavigatorRoutingModule } from './navigator-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigatorRoutingModule
  ],
  declarations: [NavigatorPage]
})
export class NavigatorPageModule {}
