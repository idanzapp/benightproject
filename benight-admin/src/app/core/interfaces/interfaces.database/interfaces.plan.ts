
export interface Plan {
    activateCountdown: boolean
    description: string
    duration: string
    enablePlan: boolean
    enableList: boolean
    planPhotoURL: string
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

export interface planDate {        
    activateCountdown: boolean
    date: Date
    description: string
    duration: string
    enablePlan: boolean
    enableList: boolean
    planPhotoURL: string
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
    id:string //idPlanDate
    uid:string //idPlan
    //lista propietarios
    //lista clubs
    //lista vip
    //lista ban
}

export interface modifiedPlanDateItem {
    uid:string //idPlanDate   
}
export interface modifiedPlanDates {
    uid: string //idPlan
    listModifiedDates:any
}

export interface promote {
    id:string
    uid:string //idPlan    
    budget:number
    createdAt:Date
    type: 'on-time' | 'subscription' | 'bono'
    duration?: number //only for subscription or bono
    nextDate: Date
}
            
export interface silencedItem {
    uid: string //idPlan
    createdAt:Date
}

export interface UserSilencedPlans {
    uid: string //idUser
    planList
}
