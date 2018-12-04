import { Component, Input, OnInit } from '@angular/core'
import { interval, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  clock:Observable<any>
  @Input() date
  constructor() { }

  ngOnInit() {
    let time = new Date(this.date).getTime() - new Date().getTime()
    this.clock = interval(1000).pipe(map(sec => (time - sec) > 0 ? this.format(time - sec) : 'Expirado'))
  } 

  format(time:number) {
    let dias = Math.floor(time / (60*60*24))
    time = time - (dias * 60*60*24)
    let horas = Math.floor(time / (60*60))
    time = time - (horas * 60*60)
    let minutos = Math.floor( time / 60)
    time = time - (minutos * 60)
    let segundos = time 
    let clock = ''
    if (dias > 0)
      clock += ` ${dias}d`
    if (horas > 0)
      clock += ` ${horas}h`
    if (minutos > 0)
      clock += ` ${minutos}m` 
    if (segundos > 0)
      clock += ` ${segundos}s`                                  
    return clock
  }
  

}
