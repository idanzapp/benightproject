import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.core'
import { LoginPage } from '@bn8-login/login.page'
import { LoginRoutingModule } from '@bn8-login/login-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    LoginRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
