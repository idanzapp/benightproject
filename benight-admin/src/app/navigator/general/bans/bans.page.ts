import { Component, OnInit } from '@angular/core'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'general-bans',
  templateUrl: './bans.page.html',
  styleUrls: ['./bans.page.scss'],
})
export class BansPage implements OnInit {

  constructor(private sd: SharedDataService) { }

  ngOnInit() {
    this.sd.set('header', 'Bans')
    this.sd.set('back-button', false)
  }

}
