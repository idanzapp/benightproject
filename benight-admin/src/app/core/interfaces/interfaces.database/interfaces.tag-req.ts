export interface Tags {
    id: string
    name: string
}

export interface Requirements {
    id: string
    name: string
}

//Elementos de las lista
export interface Tag {
    id: string
    name: string
    createdAt: Date
    updatedAt:Date
}

//Elementos de las lista
export interface Requirement {
    id: string
    name: string
    createdAt: Date
    updatedAt:Date
}

export interface UserTag {
    uid: string //idUser
    listTags: any 
    createdAt: Date
    updatedAt:Date
}

export interface UserRequirement{
    uid: string //idUser
    listRequirements: any
    createdAt: Date
    updatedAt:Date 
}

