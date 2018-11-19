// Base Modules
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { CoreModule } from '@bn8-core/core.module'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { ChartsModule } from 'ng2-charts'
import { NgAisModule } from 'angular-instantsearch'

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
    NgAisModule.forRoot(),
    ChartsModule
]