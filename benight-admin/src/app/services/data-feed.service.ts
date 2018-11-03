import { database } from './../core/constants/constants.database';
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { filter } from 'rxjs/operators'
import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { AuthService } from '@bn8-services/auth.service'
import { Connection } from '@bn8-interfaces/interfaces.datafeed'
import { properties } from '@bn8-constants/constants.datafeed'

//Database imports Functions
import { ChatDatabase } from '@bn8-database/chat.database'
import { LocationDatabase } from '@bn8-services/database/location.database'
import { EmployeeDatabase } from '@bn8-database/employee.database'
import { EventsDatabase } from '@bn8-database/events.database'
import { PlansDatabase } from '@bn8-database/plans.database'
import { RequirementsDatabase } from '@bn8-database/requirements.database'
import { TagsDatabase } from '@bn8-database/tags.database'
import { TicketDatabase } from '@bn8-database/ticket.database'

@Injectable({
  providedIn: 'root'
})
export class DataFeedService {

  private connection: Connection = {}
  private connectionLiteral = {
    chats: () => new ChatDatabase(this.db, this.auth),
    clubs: () => new LocationDatabase(this.db, this.auth),
    employees: () => new EmployeeDatabase(this.db, this.auth),
    events: () => new EventsDatabase(this.db, this.auth),
    plans: () => new PlansDatabase(this.db, this.auth),
    requirements: () => new RequirementsDatabase(this.db),
    tags: () => new TagsDatabase(this.db),
    tickets: () => new TicketDatabase(this.db, this.auth),
    default: () => of(null)
  }

  constructor(private db: FirebaseClient, private auth: AuthService) { }

  async get(property: string) {    
    //Check if property is defined
    if ((property in this.connectionLiteral && property != properties.date)) {
      //Charge data on Demand
      if (!(property in this.connection))
        this.connection[property] = this.connectionLiteral[property]()
      return this.connection[property].fetch()
    }
  }

  getItem(property: string, id: string) {
    //only for Observer
    /*if (variable && id && this.accesed[variable] && variable < database.VAR_OBSERVER_LONG )
      return (this.connection[variable].fetch() as Observable<any>).pipe(filter(item => item.uid === id))
    return of(null)*/
    return {
      id: id,
      name: 'prueba',
      requisites: ['#req1', '#req2'],
      tags: ['#tag1', '#tag2', '#tag3', '#tag4'],
      club: [
        {
          name: 'Club Name Prueba',
          location: 'tralari',
          next_date: 'dddd hhh'
        }, {
          name: 'Club Name Prueba 4',
          location: 'tralari 5',
          next_date: 'dddd hhh'
        }
      ],
      owners: [
        {
          name: 'organizador1',
          img: 'assets/img/photo1.jpg'
        },
        {
          name: 'organizador2',
          img: 'assets/img/photo16.jpg'
        },
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur quam pharetra tortor eleifend, sed dignissim arcu lobortis. Cras luctus nisi in nibh congue, non tristique felis posuere. Morbi id enim arcu. Cras laoreet sapien ut congue efficitur. Proin dignissim turpis lacus, tempus tristique neque tristique eget. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas non est nibh. Aliquam ac finibus risus, vel pretium enim. Morbi a ullamcorper lorem. Quisque lobortis, ligula vel tempor commodo, lorem est efficitur enim, egestas blandit magna ligula ac magna. Integer pulvinar aliquet ultrices. Aenean fringilla venenatis vehicula. Donec tristique non felis id varius. Nulla dictum velit ac ornare fringilla. Suspendisse est lorem, ultricies sit amet interdum eget, finibus vel leo. Vestibulum pulvinar lorem dolor, sed interdum dui efficitur ut. Aenean nec odio ultricies, porta augue a, ornare ipsum. Vestibulum quis metus semper, posuere magna molestie, dignissim neque. Vestibulum magna odio, cursus vel commodo accumsan, efficitur sit amet justo. Etiam tempus nisi eget urna tempus, non laoreet mi euismod. Aenean faucibus, nisi et luctus luctus, lectus dolor convallis metus, in tincidunt magna turpis non tortor",
      tickets: [
        {
          name: 'entrada 1',
          description: 'descripcion entrada 1',
          publico: [{
            tipo: 'tipo1',
            valor: 100,
            moneda: '€',
            validez: 'fecha'
          }, {
            tipo: 'tipo2',
            valor: 0,
            moneda: '€',
            validez: 'fecha',
          }],
        },
        {
          name: 'entrada 2',
          description: 'descripcion entrada 2',
          publico: [{
            tipo: 'tipo1',
            valor: 96,
            moneda: '€',
            validez: 'fecha'
          }],
        }
      ]
    }
  }

  async create(property: string) {
    //Check if property is defined
    if ((property in this.connectionLiteral)) {
      //Charge data on Demand
      if (!(property in this.connection))
        this.connection[property] = this.connectionLiteral[property]()      
      return this.connection[property]().create(this.db.createId(database.connections.admin))
    }
  }

  async delete(property: string, id:string) {
    //Check if property is defined
    if ((property in this.connectionLiteral)) {
      //Charge data on Demand
      if (!(property in this.connection))
        this.connection[property] = this.connectionLiteral[property]()
      return this.connection[property].delete(id)
    }
  }
}