import { APP_INITIALIZER } from '@angular/core'
import { FirebaseClient } from '@bn8-services/firebase-client.service'

function init_client(loadClient: FirebaseClient) {
    return () => loadClient.initializeApp()
}

import { FirebaseProviders } from '@bn8-database/db-connection.database'

export const ClientProvider = [ 
    FirebaseClient,
    { provide: APP_INITIALIZER, useFactory: init_client, deps: [FirebaseClient], multi: true },      
    FirebaseProviders 
]

