import { Component} from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage {

  constructor(private router: Router) {}

  goto(ref) {
    this.router.navigate([ref])
  }
}
