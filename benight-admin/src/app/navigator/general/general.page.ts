import { Component} from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage  {


  constructor(private router: Router) {}

  goto(ref) {
    this.router.navigate([ref])
  }

}
