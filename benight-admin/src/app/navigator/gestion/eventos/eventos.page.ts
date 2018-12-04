import { Component, OnInit } from '@angular/core'
import { DataFeedService } from '@bn8-services/data-feed.service'
import { database } from '@bn8-constants/constants.database'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'

@Component({
  selector: 'gestion-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  events$: Observable<any>
  private basehref:string = ''

  constructor(private feed: DataFeedService,private router: Router) {}

  ngOnInit() {
    this.events$ = this.feed.fetch(database.literal.events).pipe(
      map( events => {
        return (events as Array<any>).map(
          event => {
            event['price'] = event.ticketList
            .map(ticket => ticket && ticket.price)
            .reduce((min, current) => min = (!min) ? current : Math.min(min, current))            
            let date = new Date(event.nextDate)
            let locale = navigator.language
            event['dateString'] = `${date.getDay()} ${date.toLocaleString(locale, {
              month: "short"
            })}, ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`
            let duration = event.duration
            let dias = Math.floor(duration / (60*24))
            duration = duration - (dias * 60*24)
            let horas = Math.floor(duration / 60)
            duration = duration - (horas * 60)
            let minutos = duration
            event['durationString'] = 'dura'
            if (dias > 0)
              event['durationString'] = `${event['durationString']} ${dias}d`
            if (horas > 0)
              event['durationString'] = `${event['durationString']} ${horas}h`
            if (minutos > 0)
              event['durationString'] = `${event['durationString']} ${minutos}m`                                  
            return event
          }
        )
      })
    )
    this.basehref = this.router.url.slice(0, this.router.url.lastIndexOf('/'))
  }

  async goto(id?:string) {
    if (!id) 
      id = await this.feed.add(database.literal.events) 
    this.router.navigate([`${this.basehref}/eventos/${database.actions.edit}`, id])
  }

  trackById(idx:number, todo:any) {
    return todo.id
  }
}
  
 