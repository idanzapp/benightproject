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
}

export namespace languages {
  //APP LANGUAGES
  export const es = 'es_ES'
  export const fr = 'fr_FR'
  export const pt = 'pt_PT'
  export const en = 'en_EN' 

}


