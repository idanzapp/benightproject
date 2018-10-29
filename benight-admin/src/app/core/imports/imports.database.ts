import { APP_INITIALIZER } from '@angular/core'
import { environment } from '@bn8-environments/environment'
import { database } from '@bn8-constants/constants.database'
import { languageEnvironment } from '@bn8-constants/constants.languages'
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

export { FireFormDirective } from '@bn8-directives/fire-form.directive'
export { FirebaseClient } from '@bn8-services/firebase-client.service'
export { FirebaseProviders } from '@bn8-database/db-connection.database'

export const FirebaseModules = [
    AngularFireModule.initializeApp(environment.firebase_login, database.connections.login),
    AngularFireModule.initializeApp(languageEnvironment[navigator.language.slice(0,2)] || languageEnvironment.en , database.connections.events),
    AngularFireModule.initializeApp(environment.firebase_login,database.connections.admin),
    AngularFireModule.initializeApp(environment.firebase_login,database.connections.ticket),
    geofirex.init(firebase.initializeApp(environment.firebase_markers,database.connections.markers)),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
]

export const ClientProvider = [    
    FirebaseClient,
    { provide: APP_INITIALIZER, useFactory: init_client, deps: [FirebaseClient], multi: true }
]

