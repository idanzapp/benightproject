import { firestore } from './interfaces'

import { Observable, combineLatest } from 'rxjs'
import { shareReplay, map } from 'rxjs/operators'
import { GeoFirePoint, Latitude, Longitude } from './point'
import { setPrecision } from './utils'
import { FeatureCollection, Geometry } from 'geojson'
import { AngularFirestore } from '@angular/fire/firestore'
import { DocumentData } from '@firebase/firestore-types'

export type QueryFn = (ref: firestore.CollectionReference) => firestore.Query

export interface GeoQueryOptions {
    units: 'km'
}
const defaultOpts: GeoQueryOptions = { units: 'km' }

export interface QueryMetadata {
    bearing: number
    distance: number
}

export interface GeoQueryDocument {
    [key: string]: any
    queryMetadata: QueryMetadata
}

export class GeoCollection {
    private ref: firestore.CollectionReference
    private query: firestore.Query

    constructor(
        private app: AngularFirestore,
        private path: string,
        query?: QueryFn
    ) {
        /*this.ref = app.firestore().collection(path)
        if (query) this.query = query(this.ref)*/
    }

    collection(path,query?) {        
        return this.app.collection(path,query)        
    }

    /**
     * Create or update a document with GeoFirePoint data
     * @param  {string} id document id
     * @param  {string} field name of point on the doc
     * @param  {Latitude} latitude
     * @param  {Longitude} longitude
     * @returns {Promise<void>}
     */
    setPoint(
        id: string,
        field: string,
        latitude: Latitude,
        longitude: Longitude
    ) {
        //const point = new GeoFirePoint(this.app, latitude, longitude).data
        //return this.ref.doc(id).set({ [field]: point }, { merge: true })
    }

    private createStream(input): Observable<any> {
        return new Observable(observer => {
            const unsubscribe = input.onSnapshot(observer)
            return { unsubscribe }
        })
    }

    // GEO QUERIES
    /**
     * Queries the Firestore collection based on geograpic radius
     * @param  {GeoFirePoint} center the starting point for the query, i.e gfx.point(lat, lng)
     * @param  {number} radius the radius to search from the centerpoint
     * @param  {string} field the document field that contains the GeoFirePoint data
     * @param  {GeoQueryOptions} opts=defaultOpts
     * @returns {Observable<GeoQueryDocument>} sorted by nearest to farthest
     */
    within(
        center: GeoFirePoint,
        radius: number,
        field: string
    ): Observable<GeoQueryDocument[]> {
        const precision = setPrecision(radius)
        const centerHash = center.hash.substr(0, precision)
        const area = GeoFirePoint.neighbors(centerHash).concat(centerHash)

        const queries = area.map(hash => {
            const query = this.queryPoint(hash, field)
            return this.createStream(query).pipe(
                map((foo: firestore.QuerySnapshot) =>
                    foo.docs.map(v => {
                        return {
                            ...('id' ? { ['id']: v.id } : null),
                            ...v.data()
                        }
                    })
                ))
        })

        const combo = combineLatest(...queries).pipe(
            map(arr => {
                const reduced = arr.reduce((acc, cur) => acc.concat(cur))
                return reduced
                    .filter(val => {
                        const lat = val[field].geopoint.latitude
                        const lng = val[field].geopoint.longitude
                        return center.distance(lat, lng) <= radius * 1.02 // buffer for edge distances
                    })
                    .map(val => {
                        const lat = val[field].geopoint.latitude
                        const lng = val[field].geopoint.longitude
                        const queryMetadata = {
                            distance: center.distance(lat, lng),
                            bearing: center.bearing(lat, lng)
                        }
                        return { ...val, queryMetadata }
                    })
                    .sort((a, b) => a.queryMetadata.distance - b.queryMetadata.distance)
            }),
            shareReplay(1)
        )

        return combo
    }

    private queryPoint(geohash: string, field: string) {
        const end = geohash + '~'
        return this.query
            .orderBy(`${field}.geohash`)
            .startAt(geohash)
            .endAt(end)
    }
}

/**
 * RxJS operator that converts a collection to a GeoJSON FeatureCollection
 * @param  {string} field the document field that contains the GeoFirePoint
 * @param  {boolean=false} includeProps
 */
export function toGeoJSON(field: string, includeProps: boolean = false) {
    return map((data: any[]) => {
        return {
            type: 'FeatureCollection',
            features: data.map(v =>
                GeoFirePoint.geoJSON(
                    [v[field].geopoint.latitude, v[field].geopoint.longitude],
                    includeProps ? { ...v } : {}
                )
            )
        } as FeatureCollection<Geometry>
    }) as any
}