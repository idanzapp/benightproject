export interface Event {
    activateCountdown: boolean
    description: string
    duration: string
    enableEvent: boolean
    enableList: boolean
    eventPhotoURL: string
    free: boolean
    gaugin: number
    headerPhotoURL: string
    initDate: Date
    isPrivate:boolean
    maxAge: number
    minAge: number
    name: string
    nextDate: Date
    nextChat:string
    photoURL: string
    price: number
    uid: string
    //lista propietarios
    //lista clubs
    //lista vip
}

export interface eventDate {        
    activateCountdown: boolean
    date: Date
    description: string
    duration: string
    enableEvent: boolean
    enableList: boolean
    eventPhotoURL: string
    free: boolean
    gaugin: number
    headerPhotoURL: string
    isPrivate:boolean
    maxAge: number
    minAge: number
    name: string
    nextChat:string
    photoURL: string
    price: number
    id:string //idEventDate
    uid:string //idEvent
    //lista propietarios
    //lista clubs
    //lista vip
    //lista ban
}

export interface modifiedEventDateItem {
    uid:string //idEventDate   
}
export interface modifiedEventDates {
    uid: string //idEvent
    listModifiedDates:any
}

export interface promote {
    id:string
    uid:string //idEvent    
    budget:number
    createdAt:Date
    type: 'on-time' | 'subscription' | 'bono'
    duration?: number //only for subscription or bono
    nextDate: Date
}
            
export interface silencedItem {
    uid: string //idEvent
    createdAt:Date
}

export interface UserSilencedEvents {
    uid: string //idUser
    eventList
}
