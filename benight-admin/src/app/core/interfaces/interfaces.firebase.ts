import * as ftypes from '@firebase/firestore-types'
import * as atypes from '@firebase/auth-types'
import * as mtypes from '@firebase/messaging-types'
import * as funtypes from '@firebase/functions-types'
import * as stypes from '@firebase/storage-types'

export namespace firestore {
  export interface CollectionReference extends ftypes.CollectionReference {}
  export interface Query extends ftypes.Query {}
  export interface QuerySnapshot extends ftypes.QuerySnapshot {}
  export interface GeoPoint extends ftypes.GeoPoint {}
  export interface DocumentReference extends ftypes.DocumentReference {}
  export interface Firestore extends ftypes.FirebaseFirestore {}
  export interface FirebaseApp {
    firestore?(): ftypes.FirebaseFirestore,
    auth?(): atypes.FirebaseAuth,
    messaging?(): mtypes.FirebaseMessaging,
    functions?(): funtypes.FirebaseFunctions,
    storage?(): stypes.FirebaseStorage,
  }
}