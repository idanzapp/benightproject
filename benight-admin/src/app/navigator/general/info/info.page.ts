import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '@bn8-services/shared-data.service'
@Component({
  selector: 'general-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private sd: SharedDataService) { }

  ngOnInit() {
    this.sd.set('header', 'Info')
    this.sd.set('back-button', false)
  }

}
