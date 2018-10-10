import { Injectable, NgZone } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireFunctions } from '@angular/fire/functions'
import { AngularFireMessaging } from '@angular/fire/messaging'
import { environment } from '@bn8-environments/environment'

@Injectable({
  providedIn: 'root'
})
//Firestore
//export class FirestoreLoginService extends AngularFirestore {}
export class FirestoreEventService extends AngularFirestore {}
export class FirestoreAdminService extends AngularFirestore {}
export class FirestoreTicketService extends AngularFirestore {}
//Functions
//export class FunctionsLoginService extends AngularFireFunctions {}
export class FunctionsEventService extends AngularFireFunctions {}
export class FunctionsAdminService extends AngularFireFunctions {}
export class FunctionsTicketService extends AngularFireFunctions {}
//Messaging
//export class MessagingLoginService extends AngularFireMessaging {}
export class MessagingEventService extends AngularFireMessaging {}
export class MessagingAdminService extends AngularFireMessaging {}
export class MessagingTicketService extends AngularFireMessaging {}
//Firestore Factory
//export function AngularFireLoginFactory(platformId: Object, zone: NgZone) { return new AngularFirestore(environment.firebase_login, 'login', false, null, platformId, zone)}
export function AngularFireAdminFactory(platformId: Object, zone: NgZone) {return new AngularFirestore(environment.firebase_base, 'admin', false, null, platformId, zone)}
export function AngularFireTicketFactory(platformId: Object, zone: NgZone) {return new AngularFirestore(environment.firebase_ticket, 'ticket', false, null, platformId, zone)}
export function AngularFireEventFactory(platformId: Object, zone: NgZone) {
  let events
  if (navigator.language)
      switch (navigator.language) {
          case 'es_ES':
              events = environment.firebase_es_ES
              break
          case 'fr_FR':
              events = environment.firebase_fr_FR
              break
          case 'pt_PT':
              events = environment.firebase_pt_PT
              break
          default:
              events = environment.firebase_en_EN
      }
  return new AngularFirestore(events, 'coolstore', false, null, platformId, zone)
}
//Functions Factory
//export function AngularFireFunctionsLoginFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_login, 'login', platformId, zone)}
export function AngularFireFunctionsAdminFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_base, 'admin', platformId, zone)}
export function AngularFireFunctionsTicketFactory(platformId: Object, zone: NgZone) {return new AngularFireFunctions(environment.firebase_ticket, 'ticket', platformId, zone)}
export function AngularFireFunctionsEventFactory(platformId: Object, zone: NgZone) {
  let events
  if (navigator.language)
      switch (navigator.language) {
          case 'es_ES':
              events = environment.firebase_es_ES
              break
          case 'fr_FR':
              events = environment.firebase_fr_FR
              break
          case 'pt_PT':
              events = environment.firebase_pt_PT
              break
          default:
              events = environment.firebase_en_EN
      }
  return new AngularFireFunctions(events, 'coolstore', platformId, zone)
}
//Message Factory
//export function AngularFireMessagingLoginFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_login, 'login', platformId, zone)}
export function AngularFireMessagingAdminFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_base, 'admin', platformId, zone)}
export function AngularFireMessagingTicketFactory(platformId: Object, zone: NgZone) {return new AngularFireMessaging(environment.firebase_ticket, 'ticket', platformId, zone)}
export function AngularFireMessagingEventFactory(platformId: Object, zone: NgZone) {
  let events
  if (navigator.language)
      switch (navigator.language) {
          case 'es_ES':
              events = environment.firebase_es_ES
              break
          case 'fr_FR':
              events = environment.firebase_fr_FR
              break
          case 'pt_PT':
              events = environment.firebase_pt_PT
              break
          default:
              events = environment.firebase_en_EN
      }
  return new AngularFireMessaging(events, 'coolstore', platformId, zone)
}


