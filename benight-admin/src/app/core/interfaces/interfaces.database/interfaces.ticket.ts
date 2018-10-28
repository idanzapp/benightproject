export interface Ticket {
    createdAt: Date
    updatedAt: Date
    type: 'subscription' | 'ticket' | 'bond'
    openAt: Date
    expiresAt: Date
    duration?: 'unitary' | 'daily' | 'weekly' | 'monthly'| 'bimonthly' | 'quarterly'| 'semiannually' | 'annually' | 'unspecified'
    gauge: number
    nextDate: Date
    uses?: number
    uid: string
    userId: string //admin que lo creo
    active: boolean
    name: string
    description: string
}

export interface eventDateTicket {
    uid:string //idEvent
    date: Date
    ticketList:any
}

export interface planDateTicket {
    uid:string //idPlan
    data: Date
    ticketList:any
}

export interface ticketTransaction {
    uid:string //idTicket
    code?:string //If a code is used to buy it
    createdAt:Date
    numTicket:number
    discount:number
    price:number //uniraty price
}

export interface ticketUserAggregation {
    uid:string //idUser
    ticketTransactionList
}