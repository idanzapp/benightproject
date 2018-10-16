import * as ftypes from '@firebase/firestore-types'
import * as mtypes from '@firebase/messaging-types'
import * as funtypes from '@firebase/functions-types'
import * as stypes from '@firebase/storage-types'

export namespace firebase {
  export interface CollectionReference extends ftypes.CollectionReference  {}
  export interface Query extends ftypes.Query {}
  export interface QuerySnapshot extends ftypes.QuerySnapshot {}
  export interface GeoPoint extends ftypes.GeoPoint {}
  export interface DocumentReference extends ftypes.DocumentReference {}
  export interface Firestore extends ftypes.FirebaseFirestore {}
  export interface Messaging extends mtypes.FirebaseMessaging {}
  export interface Functions extends funtypes.FirebaseFunctions {}
  export interface Storage extends stypes.FirebaseStorage {}
  export interface GeoQueryOptions { units: 'km' }
  export interface QueryMetadata { bearing: number, distance: number }
  export interface GeoQueryDocument { [key: string]: any,queryMetadata: QueryMetadata }
  export interface FirebaseApp {
    firestore?(): ftypes.FirebaseFirestore,
    messaging?(): mtypes.FirebaseMessaging,
    functions?(): funtypes.FirebaseFunctions,
    storage?(): stypes.FirebaseStorage
  }
}

export type GeoJsonGeometryTypes =
  | 'Point'
  | 'LineString'
  | 'MultiPoint'
  | 'Polygon'
  | 'MultiLineString'
  | 'MultiPolygon'
  | 'GeometryCollection'
  
export type GeoJsonTypes =
  | 'FeatureCollection'
  | 'Feature'
  | GeoJsonGeometryTypes

export type BBox =
  | [number, number, number, number]
  | [number, number, number, number, number, number]


export type Position = number[]

export interface GeoJsonObject {
  type: GeoJsonTypes
  bbox?: BBox
}

export type GeoJSON = Geometry | Feature | FeatureCollection

export interface GeometryObject extends GeoJsonObject {
  type: GeoJsonGeometryTypes

}

export type Geometry =
  | Point
  | MultiPoint
  | LineString
  | MultiLineString
  | Polygon
  | MultiPolygon
  | GeometryCollection


export interface Point extends GeometryObject {
  type: 'Point'
  coordinates: Position
}

export interface MultiPoint extends GeometryObject {
  type: 'MultiPoint'
  coordinates: Position[]
}

export interface LineString extends GeometryObject {
  type: 'LineString'
  coordinates: Position[]
}

export interface MultiLineString extends GeometryObject {
  type: 'MultiLineString'
  coordinates: Position[][]
}

export interface Polygon extends GeometryObject {
  type: 'Polygon'
  coordinates: Position[][]
}

export interface MultiPolygon extends GeometryObject {
  type: 'MultiPolygon'
  coordinates: Position[][][]
}

export interface GeometryCollection extends GeometryObject {
  type: 'GeometryCollection'
  geometries: Geometry[]
}

export type GeoJsonProperties = { [name: string]: any } | null

export interface Feature<
  G extends GeometryObject | null = Geometry,
  P = GeoJsonProperties
> extends GeoJsonObject {
  type: 'Feature'
  geometry: G
  id?: string | number
  properties: P
}

export interface FeatureCollection<
  G extends GeometryObject | null = Geometry,
  P = GeoJsonProperties
> extends GeoJsonObject {
  type: 'FeatureCollection'
  features: Array<Feature<G, P>>
}