import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { SharedDataService } from '@bn8-services/shared-data.service';

@Component({
  selector: 'eventos-clubs',
  templateUrl: './clubs.page.html',
  styleUrls: ['./clubs.page.scss'],
})
export class ClubsPage implements OnInit {

  constructor(private router: Router, private sd: SharedDataService) { }

  ngOnInit() {
  }

  detail() {
    this.sd.set('tabs',{info:true,galeria:true,listado:true,qr:false})
    this.sd.set('header','Eventos')
    this.router.navigate(['/navigator/eventos-handler/clubs/detalle/listado'])
  }
}
