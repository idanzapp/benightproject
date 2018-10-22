import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.core'
import { LoginPage } from './login.page'
import { LoginRoutingModule } from './login-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    LoginRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
