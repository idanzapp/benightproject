import { SharedDataService } from '@bn8-services/shared-data.service'
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

  constructor(private router: Router, private sd: SharedDataService) {
  }

  ngOnInit() {
    for (let i = 0; i < this.tabs.length; i++)
      this.tabs[i] = { ...this.tabs[i], index: i }
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.tabs.indexOf(this.tabs.find(tab => {return tab.href === this.router.url}))
    })
  }

  click(title) {
    this.sd.set('header', title)
  }
  show(str) {
    console.log(str)
  }

}
