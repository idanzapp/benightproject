import { Router } from '@angular/router'
import { Component, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements AfterViewInit {

  constructor(private router: Router) { }

  ngAfterViewInit() {}
}
