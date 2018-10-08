import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ParamMap } from '@angular/router'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { delay } from 'rxjs/operators'

@Component({
  selector: 'gestion-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  private activatedRoute: ActivatedRoute
  private paramMapSubscription: Subscription
  private router: Router
  
  constructor(activatedRoute: ActivatedRoute, router: Router) {
    this.activatedRoute = activatedRoute
    this.router = router
  }

  // ---
  // PUBLIC METHODS.
  // ---

  // I get called once when the component is being destroyed.
  public ngOnDestroy(): void {
    this.router.navigate['/navigator/gestion']

    console.log(this.router,'redirecting..., ngOnDestroy() called.')
    console.groupEnd()
  }


  // I get called once, after the inputs have been bound for the first time.
  public ngOnInit(): void {
    
  }
}