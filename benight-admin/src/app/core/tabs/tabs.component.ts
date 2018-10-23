import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  activeLinkIndex = 0

  @Input() tabs: any

  constructor(private router:Router) {}

  ngOnInit() {}
}
