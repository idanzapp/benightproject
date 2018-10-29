export interface Clubs {
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
export interface ClubPhoto{
    id:string //idPhoto
    createdAt:Date
    photo:string
    updatedAt:Date
}

//Si necesito el createdAt y updatedAt
export interface ClubGallery {
    uid: string //idClub    
    createdAt:Date
    photoList: any
    updatedAt:Date
}

//Solo guarda la relacion y la siguiente fecha
export interface ClubEvent {
    uid: string //idClub  
    eventList: any
    nextDate:Date
}

//Solo guarda la relacion
export interface UserClub {
    uid: string //idUser
    id: string //idClub
}