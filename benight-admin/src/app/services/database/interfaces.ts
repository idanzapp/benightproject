import * as types from '@firebase/firestore-types'

export namespace firestore {
  export interface CollectionReference extends types.CollectionReference {}
  export interface Query extends types.Query {}
  export interface QuerySnapshot extends types.QuerySnapshot {}
  export interface GeoPoint extends types.GeoPoint {}
  export interface DocumentReference extends types.DocumentReference {}
  export interface Firestore extends types.FirebaseFirestore {}
  export interface FirebaseApp {
    firestore?(): types.FirebaseFirestore
  }
}

//Database Functions
import { ChatDatabase } from '@bn8-database/chat.database'
import { ClubsDatabase } from '@bn8-database/clubs.database'
import { DateDatabase } from '@bn8-database/date.database'
import { EmployeeDatabase } from '@bn8-database/employee.database'
import { EventsDatabase } from '@bn8-database/events.database'
import { FileBucket } from '@bn8-database/file.bucket'
import { ListsDatabase } from '@bn8-database/lists.database'
import { NotificationsDatabase } from '@bn8-database/notifications.database'
import { OwnersDatabase } from '@bn8-database/owners.database'
import { PlansDatabase } from '@bn8-database/plans.database'
import { PromosDatabase } from '@bn8-database/promos.database'
import { PublicRulesDatabase } from '@bn8-database/public-rules.database'
import { RequirementsDatabase } from '@bn8-database/requirements.database'
import { StatisticsDatabase } from '@bn8-database/statistics.database'
import { TagsDatabase } from '@bn8-database/tags.database'
import { TicketDatabase } from '@bn8-database/ticket.database'

export namespace database { 
  //VARIABLES map
  export const DB_CON_EVENTS = 'events'
  export const DB_CON_ADMIN = 'admin'
  export const DB_CON_TICKET = 'ticket'
  export const DB_CON_LOGIN = 'login'
  export const DB_CON_MARKERS = 'markers'
  
  //Accesed list map
  export const VAR_CHAT  = 0
  export const VAR_CLUBS  = 1
  export const VAR_DATE  = 2
  export const VAR_EMPLOYEE  = 3
  export const VAR_EVENTS  = 4
  export const VAR_FILE  = 5
  export const VAR_LISTS  = 6
  export const VAR_NOTIFICATIONS  = 7
  export const VAR_OWNERS  = 8
  export const VAR_PLANS  = 9
  export const VAR_PROMOS  = 10
  export const VAR_PUBLIC_RULES  = 11
  export const VAR_REQUIREMENTS  = 12
  export const VAR_STATISTICS  = 13
  export const VAR_TAGS  = 14
  export const VAR_TICKET  = 15
  export const VAR_HEADER = 16
  export const VAR_TABS = 17
  export const VAR_BACK = 18
  export const VAR_BACK_URL = 19


  export const FN_CHAT = ChatDatabase
  export const FN_CLUBS = ClubsDatabase
  export const FN_DATE = DateDatabase
  export const FN_EMPLOYEE = EmployeeDatabase
  export const FN_EVENTS = EventsDatabase
  export const FN_FILE = FileBucket
  export const FN_LISTS = ListsDatabase
  export const FN_NOTIFICATIONS = NotificationsDatabase
  export const FN_OWNERS = OwnersDatabase
  export const FN_PLANS = PlansDatabase
  export const FN_PROMOS = PromosDatabase
  export const FN_PUBLIC_RULES = PublicRulesDatabase
  export const FN_REQUIREMENTS = RequirementsDatabase
  export const FN_STATISTICS = StatisticsDatabase
  export const FN_TAGS = TagsDatabase
  export const FN_TICKET = TicketDatabase
}

export namespace languages {
  //APP LANGUAGES
  export const es = 'es_ES'
  export const fr = 'fr_FR'
  export const pt = 'pt_PT'
  export const en = 'en_EN' 

}


