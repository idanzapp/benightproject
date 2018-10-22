import { APP_INITIALIZER } from '@angular/core'
import { environment } from '@bn8-environments/environment'
import { languages, database } from '@bn8-database/interfaces'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireFunctionsModule } from '@angular/fire/functions'
import { AngularFireMessagingModule } from '@angular/fire/messaging'

import * as firebase from 'firebase/app'
import * as geofirex from 'geofirex'
import { FirebaseClient } from '@bn8-services/firebase-client.service'

function init_client(loadClient: FirebaseClient) {
    return () => loadClient.initializeApp()
}

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
        else
            events = environment.firebase_en_EN



export { FireFormDirective } from '@bn8-directives/fire-form.directive'
export { FirebaseClient } from '@bn8-services/firebase-client.service'
export { FirebaseProviders } from '@bn8-database/db-connection.database'

export const FirebaseModules = [
    AngularFireModule.initializeApp(environment.firebase_login, database.DB_CON_LOGIN),
    AngularFireModule.initializeApp(events, database.DB_CON_EVENTS),
    AngularFireModule.initializeApp(environment.firebase_login,database.DB_CON_ADMIN),
    AngularFireModule.initializeApp(environment.firebase_login,database.DB_CON_TICKET),
    geofirex.init(firebase.initializeApp(environment.firebase_markers,database.DB_CON_MARKERS)),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
]

export const ClientProvider = [    
    FirebaseClient,
    { provide: APP_INITIALIZER, useFactory: init_client, deps: [FirebaseClient], multi: true }
]

