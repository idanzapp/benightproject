export interface Locations {
    address:string    
    createdAt:Date
    description:string
    headerPhotoURL: string
    listPhotoURL:string
    name:string
    nextDate: Date
    updatedAt:Date
}

//Si necesito el createdAt y updatedAt
export interface LocationPhoto{
    id:string //idPhoto
    createdAt:Date
    photo:string
    updatedAt:Date
}

//Si necesito el createdAt y updatedAt
export interface LocationGallery {
    uid: string //idClub    
    createdAt:Date
    photoList: any
    updatedAt:Date
}

//Solo guarda la relacion y la siguiente fecha
export interface LocationEvent {
    uid: string //idClub  
    eventList: any
    nextDate:Date
}

//Solo guarda la relacion
export interface UserLocation {
    uid: string //idUser
    id: string //idClub
}