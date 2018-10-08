import { Component, OnInit } from '@angular/core'
import { SharedDataService } from '@bn8-services/shared-data.service'

@Component({
  selector: 'gestion-clubs',
  templateUrl: './clubs.page.html',
  styleUrls: ['./clubs.page.scss'],
})
export class ClubsPage implements OnInit {

  constructor(private sd: SharedDataService) { }

  ngOnInit() {
    this.sd.set('header', 'Clubs')
  }

}
