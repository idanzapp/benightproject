import { OnInit } from '@angular/core'

import { FirebaseClient } from '@bn8-services/firebase-client.service'
import { database } from '@bn8-constants/constants.database'
import { AuthService } from '@bn8-services/auth.service'
import { Observable } from 'rxjs'
import { shareReplay, reduce, filter, map } from 'rxjs/operators'
import { Employee } from '@bn8-core/interfaces/interfaces.database/interfaces.user'

export class EmployeeDatabase implements OnInit {
    employee$: Observable<any>

    constructor(private db: FirebaseClient, private auth: AuthService) { }

    async ngOnInit() {
        let uids = await this.auth.employees().pipe(
            reduce((acc, value) => `${acc} || ${value}`)
        )

        this.employee$ = await this.db.collection$(database.tableNames.employees,
            ref => ref.where(database.fields.internalId, database.operations.equal, uids),
            database.connections.admin).pipe(
                shareReplay(1)
            )
    }


    item(uid: string) {
        return this.employee$.pipe(
            filter(employee => employee.uid === uid),
            map(({uid, name, description, nextDate, headerPhotoURL, listPhotoURL, numPhotosGallery, maxPhotosGallery, address }) => 
            ({ uid, name, nextDate, description, headerPhotoURL, listPhotoURL, numPhotosGallery, maxPhotosGallery, address })
            ),
            shareReplay(1)
        )
    }

    fetch() {
        return this.employee$
    }

    addEmployee(data: Employee) {
        this.db.createAt(database.tableNames.employees, data, database.connections.admin)
    }

    deleteEmployee(uid: string) {
        this.db.delete(`${database.tableNames.employees}/${uid}`, database.connections.items)
    }

}

