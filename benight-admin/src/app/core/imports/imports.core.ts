import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'

//Core Imports
import { ProfileComponent } from '@bn8-core/profile/profile.component'
import { PaymentsComponent } from '@bn8-core/payments/payments.component'
import { QrComponent } from '@bn8-core/qr/qr.component'

export const coreComponents = [
    ProfileComponent,
    PaymentsComponent,
    QrComponent
]


export const myBaseModules = [
    CommonModule,
    FormsModule,
    IonicModule
]