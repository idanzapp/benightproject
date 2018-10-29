import { PLATFORM_ID,NgZone } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireFunctions } from '@angular/fire/functions'
import { AngularFireMessaging } from '@angular/fire/messaging'
import { AngularFireAuth } from '@angular/fire/auth'
import { languageEnvironment } from '@bn8-constants/constants.languages'
import { environment } from '@bn8-environments/environment'
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

//get language

//Firestore Factory
function AngularFireLoginFactory(platformId: Object, zone: NgZone) { return new AngularFirestore(environment.firebase_login, database.connections.login, false, null, platformId, zone,{})}
function AngularFireAdminFactory(platformId: Object, zone: NgZone) {return new AngularFirestore(environment.firebase_base, database.connections.admin, false, null, platformId, zone,{})}
function AngularFireTicketFactory(platformId: Object, zone: NgZone) {return new AngularFirestore(environment.firebase_ticket, database.connections.ticket, false, null, platformId, zone,{})}
function AngularFireChatFactory(platformId: Object, zone: NgZone) { return new AngularFirestore(environment.firebase_chat, database.connections.chat, false, null, platformId, zone,{})}
function AngularFireMarkersFactory() { return geofirex.init(firebase.initializeApp(environment.firebase_base, database.connections.geomarkers))}
function AngularFireEventFactory(platformId: Object, zone: NgZone) {return new AngularFirestore(languageEnvironment[navigator.language.slice(0,2)] || languageEnvironment.en, database.connections.events, false, null, platformId, zone,{})
}

//Auth Factory
function AngularAuthLoginFactory(platformId: Object, zone: NgZone) { return new AngularFireAuth(environment.firebase_login, database.connections.login, platformId, zone)}
function AngularAuthAdminFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_base, database.connections.admin, platformId, zone)}
function AngularAuthTicketFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_ticket, database.connections.ticket, platformId, zone)}
function AngularAuthChatFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_chat, database.connections.chat, platformId, zone)}
function AngularAuthMarkersFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_markers, database.connections.markers, platformId, zone)}
function AngularAuthEventFactory(platformId: Object, zone: NgZone) { return new AngularFireAuth(languageEnvironment[navigator.language.slice(0,2)] || languageEnvironment.en, database.connections.events, platformId, zone)}

//Functions Factory
function AngularFunctionsLoginFactory(platformId: Object, zone: NgZone) { return new AngularFireFunctions(environment.firebase_login, database.connections.login, platformId, zone,'')}
function AngularFunctionsAdminFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_base, database.connections.admin, platformId, zone,'')}
function AngularFunctionsTicketFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_ticket, database.connections.ticket, platformId, zone,'')}
function AngularFunctionsChatFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_chat, database.connections.chat, platformId, zone,'')}
function AngularFunctionsMarkersFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_markers, database.connections.markers, platformId, zone,'')}
function AngularFunctionsEventFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(languageEnvironment[navigator.language.slice(0,2)] || languageEnvironment.en, database.connections.events, platformId, zone,'')}

//Functions Factory
export function AngularMessagingLoginFactory(platformId: Object, zone: NgZone) { return new AngularFireMessaging(environment.firebase_login, database.connections.login, platformId, zone)}
export function AngularMessagingAdminFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_base, database.connections.admin, platformId, zone)}
export function AngularMessagingTicketFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_ticket, database.connections.ticket, platformId, zone)}
export function AngularMessagingChatFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_chat, database.connections.chat, platformId, zone)}
export function AngularMessagingMarkersFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_markers, database.connections.markers, platformId, zone)}
export function AngularMessagingEventFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(languageEnvironment[navigator.language.slice(0,2)]  || languageEnvironment.en, database.connections.events, platformId, zone)}

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