import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { LoginPage } from './login.page'
import { LoginRoutingModule } from './login-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    LoginRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
