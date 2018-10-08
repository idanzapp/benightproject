import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  activeLinkIndex = 0

  @Input() tabs: any

  constructor() {}

  ngOnInit() {}

}
