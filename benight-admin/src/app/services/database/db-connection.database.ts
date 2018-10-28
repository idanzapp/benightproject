import { PLATFORM_ID,NgZone } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireFunctions } from '@angular/fire/functions'
import { AngularFireMessaging } from '@angular/fire/messaging'
import { AngularFireAuth } from '@angular/fire/auth'
import { environment } from '@bn8-environments/environment'
import { languages } from '@bn8-constants/constants.languages'
//
import { database} from '@bn8-constants/constants.database'
import * as firebase from 'firebase/app'
import * as geofirex from 'geofirex'

//Firestore
export class FirestoreLoginService extends AngularFirestore {}
export class FirestoreEventService extends AngularFirestore {}
export class FirestoreAdminService extends AngularFirestore {}
export class FirestoreTicketService extends AngularFirestore {}
export class FirestoreMarkersService extends AngularFirestore {}
export class FirestoreChatService extends AngularFirestore {}
//Auth
export class AuthLoginService extends AngularFireAuth {}
export class AuthEventService extends AngularFireAuth {}
export class AuthAdminService extends AngularFireAuth {}
export class AuthTicketService extends AngularFireAuth {}
export class AuthMarkersService extends AngularFireAuth {}
export class AuthChatService extends AngularFireAuth {}
//Functions
export class FunctionsLoginService extends AngularFireFunctions {}
export class FunctionsEventService extends AngularFireFunctions {}
export class FunctionsAdminService extends AngularFireFunctions {}
export class FunctionsTicketService extends AngularFireFunctions {}
export class FunctionsMarkersService extends AngularFireFunctions {}
export class FunctionsChatService extends AngularFireFunctions {}
//Messaging
export class MessagingLoginService extends AngularFireMessaging {}
export class MessagingEventService extends AngularFireMessaging {}
export class MessagingAdminService extends AngularFireMessaging {}
export class MessagingTicketService extends AngularFireMessaging {}
export class MessagingMarkersService extends AngularFireMessaging {}
export class MessagingChatService extends AngularFireMessaging {}

//Firestore Factory
function AngularFireLoginFactory(platformId: Object, zone: NgZone) { return new AngularFirestore(environment.firebase_login, database.DB_CON_LOGIN, false, null, platformId, zone,{})}
function AngularFireAdminFactory(platformId: Object, zone: NgZone) {return new AngularFirestore(environment.firebase_base, database.DB_CON_ADMIN, false, null, platformId, zone,{})}
function AngularFireTicketFactory(platformId: Object, zone: NgZone) {return new AngularFirestore(environment.firebase_ticket, database.DB_CON_TICKET, false, null, platformId, zone,{})}
function AngularFireChatFactory(platformId: Object, zone: NgZone) { return new AngularFirestore(environment.firebase_chat, database.DB_CON_CHAT, false, null, platformId, zone,{})}
function AngularFireMarkersFactory() { return geofirex.init(firebase.initializeApp(environment.firebase_base,  database.DB_CON_GEOMARKERS))}
function AngularFireEventFactory(platformId: Object, zone: NgZone) {
  let events
  if (navigator.language)
      switch (navigator.language) {
          case languages.es:
              events = environment.firebase_es_ES
              break
          case languages.fr:
              events = environment.firebase_fr_FR
              break
          case languages.pt:
              events = environment.firebase_pt_PT
              break
          default:
              events = environment.firebase_en_EN
      }
  return new AngularFirestore(events, database.DB_CON_EVENTS, false, null, platformId, zone,{})
}

//Auth Factory
function AngularAuthLoginFactory(platformId: Object, zone: NgZone) { return new AngularFireAuth(environment.firebase_login, database.DB_CON_LOGIN, platformId, zone)}
function AngularAuthAdminFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_base, database.DB_CON_ADMIN, platformId, zone)}
function AngularAuthTicketFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_ticket, database.DB_CON_TICKET, platformId, zone)}
function AngularAuthChatFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_chat, database.DB_CON_CHAT, platformId, zone)}
function AngularAuthMarkersFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_markers, database.DB_CON_MARKERS, platformId, zone)}
function AngularAuthEventFactory(platformId: Object, zone: NgZone) {
  let events
  if (navigator.language)
      switch (navigator.language) {
          case languages.es:
              events = environment.firebase_es_ES
              break
          case languages.fr:
              events = environment.firebase_fr_FR
              break
          case languages.pt:
              events = environment.firebase_pt_PT
              break
          default:
              events = environment.firebase_en_EN
      }
  return new AngularFireAuth(events, database.DB_CON_EVENTS, platformId, zone)
}

//Functions Factory
function AngularFunctionsLoginFactory(platformId: Object, zone: NgZone) { return new AngularFireFunctions(environment.firebase_login, database.DB_CON_LOGIN, platformId, zone,'')}
function AngularFunctionsAdminFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_base, database.DB_CON_ADMIN, platformId, zone,'')}
function AngularFunctionsTicketFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_ticket, database.DB_CON_TICKET, platformId, zone,'')}
function AngularFunctionsChatFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_chat, database.DB_CON_CHAT, platformId, zone,'')}
function AngularFunctionsMarkersFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_markers, database.DB_CON_MARKERS, platformId, zone,'')}
function AngularFunctionsEventFactory(platformId: Object, zone: NgZone) {
  let events
  if (navigator.language)
      switch (navigator.language) {
          case languages.es:
              events = environment.firebase_es_ES
              break
          case languages.fr:
              events = environment.firebase_fr_FR
              break
          case languages.pt:
              events = environment.firebase_pt_PT
              break
          default:
              events = environment.firebase_en_EN
      }
  return new AngularFireFunctions(events, database.DB_CON_EVENTS, platformId, zone,'')
}

//Functions Factory
export function AngularMessagingLoginFactory(platformId: Object, zone: NgZone) { return new AngularFireMessaging(environment.firebase_login, database.DB_CON_LOGIN, platformId, zone)}
export function AngularMessagingAdminFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_base, database.DB_CON_ADMIN, platformId, zone)}
export function AngularMessagingTicketFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_ticket, database.DB_CON_TICKET, platformId, zone)}
export function AngularMessagingChatFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_chat, database.DB_CON_CHAT, platformId, zone)}
export function AngularMessagingMarkersFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_markers, database.DB_CON_MARKERS, platformId, zone)}
export function AngularMessagingEventFactory(platformId: Object, zone: NgZone) {
  let events
  if (navigator.language)
      switch (navigator.language) {
          case languages.es:
              events = environment.firebase_es_ES
              break
          case languages.fr:
              events = environment.firebase_fr_FR
              break
          case languages.pt:
              events = environment.firebase_pt_PT
              break
          default:
              events = environment.firebase_en_EN
      }
  return new AngularFireMessaging(events, database.DB_CON_EVENTS, platformId, zone)
}

export const FirebaseProviders = [
    { provide: FirestoreEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireEventFactory },
    { provide: FirestoreAdminService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireAdminFactory },
    { provide: FirestoreTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireTicketFactory },
    { provide: FirestoreChatService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireChatFactory },
    { provide: FirestoreLoginService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireLoginFactory },
    { provide: FirestoreMarkersService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireMarkersFactory },
    { provide: AuthEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthEventFactory },
    { provide: AuthAdminService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthAdminFactory },
    { provide: AuthTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthTicketFactory },
    { provide: AuthChatService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthChatFactory },
    { provide: AuthLoginService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthLoginFactory },
    { provide: AuthMarkersService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthMarkersFactory },
    { provide: FunctionsEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsEventFactory },
    { provide: FunctionsAdminService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsAdminFactory },
    { provide: FunctionsTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsTicketFactory },
    { provide: FunctionsChatService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsChatFactory },
    { provide: FunctionsLoginService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsLoginFactory },
    { provide: FunctionsMarkersService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsMarkersFactory },
    { provide: MessagingEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingEventFactory },
    { provide: MessagingAdminService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingAdminFactory },
    { provide: MessagingTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingTicketFactory },
    { provide: MessagingChatService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingChatFactory },
    { provide: MessagingLoginService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingLoginFactory },
    { provide: MessagingMarkersService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingMarkersFactory }
]