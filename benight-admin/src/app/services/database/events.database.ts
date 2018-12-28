import { OnDestroy } from '@angular/core'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { database } from '@bn8-constants/constants.database'
import { Observable, of, BehaviorSubject, Subscription } from 'rxjs'
import { switchMap, map, shareReplay, tap } from 'rxjs/operators'

export class EventsDatabase implements OnDestroy{
    
    private events$: Observable<any> = of(null)
    private encondedData$: Subscription
    private subject$: BehaviorSubject<any> = new BehaviorSubject(null)
    private uid$: Promise<string>

    constructor(private fc: FirebaseClient, private auth: AuthService) {this.preloadData()}

    private async preloadData() {
        this.uid$ = await this.auth.uid()
        this.events$ = await this.fc.collection$(`${database.tables.events}/${this.uid$}/${database.list.event}`, {db: database.connections.admin})
            .pipe(shareReplay(1))
        this.encondedData$ = this.events$.pipe(            
            tap(e =>  this.subject$.next((e as Array<any>)
            .map( e => {   
                return {
                    title: e.displayName,
                    subtitle: this.encodeDate(e.nextDate,e.duration),
                    tags: e.tagList,
                    text: e.locationList[0].displayName,
                    textAvatar: true,
                    avatar: this.encodePrice(e.ticketList),
                    privateItem: e.isPrivate,
                    id: e.id
                }                                    
            })))).subscribe()
    }
    
    fetch() {
        return this.events$
    }

    ngOnDestroy() {
        this.encondedData$.unsubscribe()
    }

    fetch2() {
        return this.subject$
    }

    get(id:string) {
        return this.events$.pipe(map(e => e.filter(u => u.id === id)[0]))
    }

    getField(data:any) {
        return this.get(data.id).pipe(map( u => u && u[data.field]))
    }

    async remove (eid:string) {
        let check = await this.checkRemove(eid)
        if (check)
            this.fc.delete(`${database.tables.events}/${this.uid$}/${database.list.event}/${eid}`,database.connections.admin)
        return check
    }

    save(data:any) {
        this.fc.updateAt(`${database.tables.events}/${this.uid$}/${database.list.event}/${data.uid}`, data, database.connections.admin)
        return data.uid
    }

    async add (data?:any) {
        let uid = this.fc.createId(database.connections.admin)
        let item
        if (data)  
            item = data
        else 
            item = this.getDefault()
        this.save({...item, uid:uid, createdAt: new Date().toISOString()})
        return uid
    }

    private getDefault() {
        let date = new Date().toISOString()
        return {...defaultEvent, date: date, nextDate: date, finalDate: date}
    }
    
    private checkRemove(id) {
        //tiene entradas pendientes o el evento esta en ejecucion
        let date = new Date()
        let onDuty:Promise<boolean>, hasTickets:Promise<boolean>
        hasTickets = this.getField({id: id,field: database.list.ticket}).pipe(
            map(e=> e.length===0 ? true:false)).toPromise()        
        onDuty = this.getField({id: id,field: 'nextDate'}).pipe(
            switchMap(e=> {
                return this.getField({id: id,field: 'duration'}).pipe(
                    map(u=> {
                        //u in minutes
                        let startDate = new Date(e)
                        let endDate = new Date(new Date(u*60*1000).getTime() + new Date(e).getTime())
                        return (startDate < date ) && (date < endDate )
                    })
        )})).toPromise()               
        return onDuty && hasTickets
    }

    private encodePrice(ticket){
        return ticket
          .map(ticket => ticket && ticket.price)
          .reduce((min, current) => min = (!min) ? current : Math.min(min, current))
    } 

    private encodeDate(nextDate,length) {
        let date = new Date(nextDate)
        let locale = navigator.language
        let dateString = `${date.getDay()} ${date.toLocaleString(locale, { month: "short"})}, ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`
        let duration = length
        let dias = Math.floor(duration / (60*24))
        duration = duration - (dias * 60*24)
        let horas = Math.floor(duration / 60)
        duration = duration - (horas * 60)
        let minutos = duration
        let durationString = 'dura'
        if (dias > 0)
          durationString = `${durationString} ${dias}d`
        if (horas > 0)
          durationString = `${durationString} ${horas}h`
        if (minutos > 0)
          durationString = `${durationString} ${minutos}m`
        return   `${dateString} - ${durationString}`
    }
}

const defaultEvent = {
    isPrivate: false,
    activateCountdown: false,
    name: 'prueba',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur quam pharetra tortor eleifend, sed dignissim arcu lobortis. Cras luctus nisi in nibh congue, non tristique felis posuere. Morbi id enim arcu. Cras laoreet sapien ut congue efficitur. Proin dignissim turpis lacus, tempus tristique neque tristique eget. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas non est nibh. Aliquam ac finibus risus, vel pretium enim. Morbi a ullamcorper lorem. Quisque lobortis, ligula vel tempor commodo, lorem est efficitur enim, egestas blandit magna ligula ac magna. Integer pulvinar aliquet ultrices. Aenean fringilla venenatis vehicula. Donec tristique non felis id varius. Nulla dictum velit ac ornare fringilla. Suspendisse est lorem, ultricies sit amet interdum eget, finibus vel leo. Vestibulum pulvinar lorem dolor, sed interdum dui efficitur ut. Aenean nec odio ultricies, porta augue a, ornare ipsum. Vestibulum quis metus semper, posuere magna molestie, dignissim neque. Vestibulum magna odio, cursus vel commodo accumsan, efficitur sit amet justo. Etiam tempus nisi eget urna tempus, non laoreet mi euismod. Aenean faucibus, nisi et luctus luctus, lectus dolor convallis metus, in tincidunt magna turpis non tortor",
    enableEvent: false,
    enableList: false,
    free:false,
    eventPhotoURL: 'assets/img/photo3.jpg',
    headerPhotoURL: 'assets/img/photo42.jpg',
    duration: 60*3, /*3 horas, se guarda en minutos*/
    maxAge: -1,
    minAge: 18,
    chat: 0,
    price:10,
    interval: 'weekly',
    listGaugin: 0,
    listFlow: 0,
    userFlow: 0,
    totalUserFlow: 0,
    gaugin:-1
}