//solo sirve para ordenar y recoger eventos
//eventualmente usara ML para recoger eventos
export interface Marker {
    id: string
    coords:any
    info: any //Lista de elementos necesarios del evento para calcular ML
}

export interface UserInfo {
    uid: string //id del usuario
    info: any //Lista de elementos necesarios del usuario para calcular ML
}

export interface Info {
    //required fields
    //
    //
    //
    //
    //
}