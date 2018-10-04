import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { QrComponent } from './qr/qr.component'
import { PaymentsComponent } from './payments/payments.component'
import { TabsComponent } from './tabs/tabs.component'

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ProfileComponent, LoginComponent, QrComponent, PaymentsComponent, TabsComponent],
  exports: [ProfileComponent, LoginComponent, QrComponent, PaymentsComponent, TabsComponent]
})
export class CoreModule { }
