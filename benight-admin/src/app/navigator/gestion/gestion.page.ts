import { Component, OnInit} from '@angular/core'
import { Router, ActivationStart } from '@angular/router'
import { filter } from 'rxjs/operators'
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {

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
