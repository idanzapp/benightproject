//Chat
export interface Chat {
    createdAt:Date
    closedAt?: Date
    messages:any
    name?:string
    numMessages:number
    open:boolean
    openDate?: Date
    updatedAt:Date
}

//relacion
export interface UserChat {
    uid:string //idUser
    chatList:any
}


//relacion
export interface ChatUser {
    uid:string //idChat
    userList:any
}

export interface Alias {
    id:string //idUser
    alias:string
    createdAt:Date
    updatedAt:Date
}

//relacion
export interface UserAlias {
    uid:string //idUser
    aliasList: any
}