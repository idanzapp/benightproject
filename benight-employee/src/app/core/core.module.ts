import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { PaymentsComponent } from './payments/payments.component'
import { TabsComponent } from './tabs/tabs.component'
import { QrComponent } from './qr/qr.component'

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [ProfileComponent, LoginComponent, PaymentsComponent, TabsComponent, QrComponent],
  exports: [ProfileComponent, LoginComponent, PaymentsComponent, TabsComponent, QrComponent]
})
export class CoreModule { }
