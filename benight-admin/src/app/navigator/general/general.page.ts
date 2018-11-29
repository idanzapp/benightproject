import { Component, OnInit} from '@angular/core'
import { Router, ActivationStart } from '@angular/router'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage  implements OnInit {

  back:boolean
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe( 
    filter(event => event instanceof ActivationStart) )
    .subscribe(event => { 
      this.back = (event as any)['snapshot'].data['back']   
    })}

  goto(ref) {
    this.router.navigate([ref])
  }

}
