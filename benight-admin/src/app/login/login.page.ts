import { Component, OnInit } from '@angular/core'
import { AuthService } from '@bn8-services/auth.service'

@Component({
  selector: 'bn8-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

}
