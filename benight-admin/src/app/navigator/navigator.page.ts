import { Component, OnInit } from '@angular/core'
import { Router, ActivationStart } from '@angular/router'
import { filter} from 'rxjs/operators'

@Component({
  selector: 'navigator',
  templateUrl: './navigator.page.html',
  styleUrls: ['./navigator.page.scss'],
})
export class NavigatorPage implements OnInit {

  header:string = "Eventos"
  back:boolean = false

  constructor(private router: Router) {}
  
  ngOnInit() {
    //Handle Title
    this.router.events.pipe( 
      filter(event => event instanceof ActivationStart) )
      .subscribe(event => { 
        this.back = (event as any)['snapshot'] .data['back']
        this.header = (event as any)['snapshot'].data['header']      
      })
  }

  goto(ref) {
    this.router.navigate([ref])
  }

}
