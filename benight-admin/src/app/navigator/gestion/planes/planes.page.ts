import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

@Component({
  selector: 'gestion-planes',
  templateUrl: './planes.page.html',
  styleUrls: ['./planes.page.scss'],
})
export class PlanesPage implements OnInit {

  plans$: Observable<any>
  private basehref:string = ''

  constructor(private feed: DataFeedService,private router: Router) {}

  ngOnInit() {
    this.plans$ = this.feed.fetch(database.literal.plans).pipe(
      map( plans => {
        return (plans as Array<any>).map(
          plan => {
            plan['price'] = plan.ticketList
            .map(ticket => ticket && ticket.price)
            .reduce((min, current) => min = (!min) ? current : Math.min(min, current))            
            let date = new Date(plan.nextDate)
            let locale = navigator.language
            plan['dateString'] = `${date.getDay()} ${date.toLocaleString(locale, {
              month: "short"
            })}, ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`
            let duration = plan.duration
            let dias = Math.floor(duration / (60*24))
            duration = duration - (dias * 60*24)
            let horas = Math.floor(duration / 60)
            duration = duration - (horas * 60)
            let minutos = duration
            plan['durationString'] = 'dura'
            if (dias > 0)
              plan['durationString'] = `${plan['durationString']} ${dias}d`
            if (horas > 0)
              plan['durationString'] = `${plan['durationString']} ${horas}h`
            if (minutos > 0)
              plan['durationString'] = `${plan['durationString']} ${minutos}m`                                  
            return plan
          }
        )
      })
    )
    this.basehref = this.router.url.slice(0, this.router.url.lastIndexOf('/'))
  }

  async goto(id?:string) {
    if (!id) 
      id = await this.feed.add(database.literal.locations) 
    this.router.navigate([`${this.basehref}/planes/${database.actions.edit}`, id])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }  

  remove(plan) {
    console.log(plan)
  }
}
