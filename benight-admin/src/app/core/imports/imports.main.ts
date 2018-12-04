// Base Modules
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { CoreModule } from '@bn8-core/core.module'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { ChartsModule } from 'ng2-charts'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '@bn8-environments/environment'


export const myBaseModules = [
    CommonModule,
    FormsModule,
    IonicModule, 
    CoreModule,
    RouterModule
]

//App Modules
export const myAppModules = [
    BrowserModule,
    IonicModule.forRoot(),
    ServiceWorkerModule.register('/benight-admin/src/combined-worker.js', { enabled: environment.production }),
    ChartsModule
]