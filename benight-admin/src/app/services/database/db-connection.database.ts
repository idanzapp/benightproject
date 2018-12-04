import { PLATFORM_ID, NgZone } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireFunctions } from '@angular/fire/functions'
import { AngularFireMessaging } from '@angular/fire/messaging'
import { AngularFireAuth } from '@angular/fire/auth'
import { languageEnvironment } from '@bn8-constants/constants.languages'
import { environment } from '@bn8-environments/environment'
//
import { database} from '@bn8-constants/constants.database'

//Firestore
export class FirestoreLoginService extends AngularFirestore {}
export class FirestoreEventService extends AngularFirestore {}
export class FirestoreAdminService extends AngularFirestore {}
export class FirestoreTicketService extends AngularFirestore {}
export class FirestoreMarkersService extends AngularFirestore {}
export class FirestoreChatService extends AngularFirestore {}
export class FirestoreFavouritesService extends AngularFirestore {}
export class FirestoreTimedOutService extends AngularFirestore {}
//Auth
export class AuthLoginService extends AngularFireAuth {}
export class AuthEventService extends AngularFireAuth {}
export class AuthAdminService extends AngularFireAuth {}
export class AuthTicketService extends AngularFireAuth {}
export class AuthMarkersService extends AngularFireAuth {}
export class AuthChatService extends AngularFireAuth {}
export class AuthFavouritesService extends AngularFireAuth {}
export class AuthTimedOutService extends AngularFireAuth {}
//Functions
export class FunctionsLoginService extends AngularFireFunctions {}
export class FunctionsEventService extends AngularFireFunctions {}
export class FunctionsAdminService extends AngularFireFunctions {}
export class FunctionsTicketService extends AngularFireFunctions {}
export class FunctionsMarkersService extends AngularFireFunctions {}
export class FunctionsChatService extends AngularFireFunctions {}
export class FunctionsFavouritesService extends AngularFireFunctions {}
export class FunctionsTimedOutService extends AngularFireFunctions {}
//Messaging
export class MessagingLoginService extends AngularFireMessaging {}
export class MessagingEventService extends AngularFireMessaging {}
export class MessagingAdminService extends AngularFireMessaging {}
export class MessagingTicketService extends AngularFireMessaging {}
export class MessagingMarkersService extends AngularFireMessaging {}
export class MessagingChatService extends AngularFireMessaging {}
export class MessagingFavouritesService extends AngularFireFunctions {}
export class MessagingTimedOutService extends AngularFireFunctions {}

//get language

//Firestore Factory
export function AngularFireLoginFactory(platformId: Object, zone: NgZone) { return new AngularFirestore(environment.firebase_login, database.connections.login, false, null, platformId, zone,{})}
export function AngularFireAdminFactory(platformId: Object, zone: NgZone) {return new AngularFirestore(environment.firebase_base, database.connections.admin, false, null, platformId, zone,{})}
export function AngularFireTicketFactory(platformId: Object, zone: NgZone) {return new AngularFirestore(environment.firebase_ticket, database.connections.tickets, false, null, platformId, zone,{})}
export function AngularFireChatFactory(platformId: Object, zone: NgZone) { return new AngularFirestore(environment.firebase_chat, database.connections.chat, false, null, platformId, zone,{})}
export function AngularFireTimedOutFactory(platformId: Object, zone: NgZone) { return new AngularFirestore(environment.firebase_timedOut, database.connections.timedOut, false, null, platformId, zone,{})}
export function AngularFireFavouritesFactory(platformId: Object, zone: NgZone) { return new AngularFirestore(environment.firebase_favourites, database.connections.favourites, false, null, platformId, zone,{})}
export function AngularFireMarkersFactory(platformId: Object, zone: NgZone) { return new AngularFirestore(environment.firebase_markers, database.connections.markers, false, null, platformId, zone,{})}
export function AngularFireEventFactory(platformId: Object, zone: NgZone) {return new AngularFirestore(languageEnvironment[navigator.language.slice(0,2)] || languageEnvironment.en, database.connections.items, false, null, platformId, zone,{})}

//Auth Factory
export function AngularAuthLoginFactory(platformId: Object, zone: NgZone) { return new AngularFireAuth(environment.firebase_login, database.connections.login, platformId, zone)}
export function AngularAuthAdminFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_base, database.connections.admin, platformId, zone)}
export function AngularAuthTicketFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_ticket, database.connections.tickets, platformId, zone)}
export function AngularAuthChatFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_chat, database.connections.chat, platformId, zone)}
export function AngularAuthTimedOutFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_timedOut, database.connections.timedOut, platformId, zone)}
export function AngularAuthFavouritesFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_chat, database.connections.favourites, platformId, zone)}
export function AngularAuthMarkersFactory(platformId: Object, zone: NgZone) {return new AngularFireAuth(environment.firebase_markers, database.connections.markers, platformId, zone)}
export function AngularAuthEventFactory(platformId: Object, zone: NgZone) { return new AngularFireAuth(languageEnvironment[navigator.language.slice(0,2)] || languageEnvironment.en, database.connections.items, platformId, zone)}

//Functions Factory
export function AngularFunctionsLoginFactory(platformId: Object, zone: NgZone) { return new AngularFireFunctions(environment.firebase_login, database.connections.login, platformId, zone,'us-central1')}
export function AngularFunctionsAdminFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_base, database.connections.admin, platformId, zone,'us-central1')}
export function AngularFunctionsTicketFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_ticket, database.connections.tickets, platformId, zone,'us-central1')}
export function AngularFunctionsChatFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_chat, database.connections.chat, platformId, zone,'us-central1')}
export function AngularFunctionsTimedOutFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_timedOut, database.connections.timedOut, platformId, zone,'us-central1')}
export function AngularFunctionsFavouritesFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_favourites, database.connections.favourites, platformId, zone,'us-central1')}
export function AngularFunctionsMarkersFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_markers, database.connections.markers, platformId, zone,'us-central1')}
export function AngularFunctionsEventFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(languageEnvironment[navigator.language.slice(0,2)] || languageEnvironment.en, database.connections.items, platformId, zone,'us-central1')}

//Functions Factory
export function AngularMessagingLoginFactory(platformId: Object, zone: NgZone) { return new AngularFireMessaging(environment.firebase_login, database.connections.login, platformId, zone)}
export function AngularMessagingAdminFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_base, database.connections.admin, platformId, zone)}
export function AngularMessagingTicketFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_ticket, database.connections.tickets, platformId, zone)}
export function AngularMessagingChatFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_chat, database.connections.chat, platformId, zone)}
export function AngularMessagingTimedOutFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_timedOut, database.connections.timedOut, platformId, zone)}
export function AngularMessagingFavouritesFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_favourites, database.connections.favourites, platformId, zone)}
export function AngularMessagingMarkersFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_markers, database.connections.markers, platformId, zone)}
export function AngularMessagingEventFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(languageEnvironment[navigator.language.slice(0,2)]  || languageEnvironment.en, database.connections.items, platformId, zone)}

export const FirebaseProviders = [
    { provide: FirestoreEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireEventFactory },
    { provide: FirestoreAdminService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireAdminFactory },
    { provide: FirestoreTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireTicketFactory },
    { provide: FirestoreChatService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireChatFactory },
    { provide: FirestoreTimedOutService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireTimedOutFactory },
    { provide: FirestoreFavouritesService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireFavouritesFactory },
    { provide: FirestoreLoginService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireLoginFactory },
    { provide: FirestoreMarkersService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFireMarkersFactory },
    { provide: AuthEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthEventFactory },
    { provide: AuthAdminService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthAdminFactory },
    { provide: AuthTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthTicketFactory },
    { provide: AuthChatService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthChatFactory },
    { provide: AuthFavouritesService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthFavouritesFactory },
    { provide: AuthTimedOutService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthTimedOutFactory },
    { provide: AuthLoginService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthLoginFactory },
    { provide: AuthMarkersService, deps: [PLATFORM_ID, NgZone], useFactory: AngularAuthMarkersFactory },
    { provide: FunctionsEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsEventFactory },
    { provide: FunctionsAdminService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsAdminFactory },
    { provide: FunctionsTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsTicketFactory },
    { provide: FunctionsChatService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsChatFactory },
    { provide: FunctionsTimedOutService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsTimedOutFactory },
    { provide: FunctionsFavouritesService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsFavouritesFactory },
    { provide: FunctionsLoginService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsLoginFactory },
    { provide: FunctionsMarkersService, deps: [PLATFORM_ID, NgZone], useFactory: AngularFunctionsMarkersFactory },
    { provide: MessagingEventService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingEventFactory },
    { provide: MessagingAdminService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingAdminFactory },
    { provide: MessagingTicketService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingTicketFactory },
    { provide: MessagingChatService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingChatFactory },
    { provide: MessagingTimedOutService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingTimedOutFactory },
    { provide: MessagingFavouritesService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingFavouritesFactory },
    { provide: MessagingLoginService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingLoginFactory },
    { provide: MessagingMarkersService, deps: [PLATFORM_ID, NgZone], useFactory: AngularMessagingMarkersFactory }
]