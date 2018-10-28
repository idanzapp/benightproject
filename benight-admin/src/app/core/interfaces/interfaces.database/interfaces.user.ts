//when creating admin if user not exist create defaultUser
//if a user got an autogenererated id, and start using facebook auth
//erase the item and create a new one with the facebook auth id
export interface User {
    appear: false
    balance: number
    banned: boolean
    birthday: Date
    createddAt: Date
    deleted: boolean
    displayName: string
    email: string
    friendList:any
    //numFriends:number
    gender: boolean
    permissionsList: any
    photoURL: string
    referralList: any
    //numReferrals:number
    uid: string
    updatedAt: Date
}

export interface Admin {
    availableTest: boolean
    code:string
    createdAt: Date
    permissionsList: any
    uid: string
    updatedAt: Date    
    upgradesList:any        
}

export interface Employee {
    code:string
    createdAt: Date
    permissionsList: any
    uid: string
    updatedAt: Date    
}

export interface ListItem {
    createdAt: Date
    uid: string
    updatedAt: Date
}

//no need of updatedAt
export interface upgradeItem {
    createdAt: Date
    discount: number
    expiresAt: Date
    uid: string //idAdminUpgrades
}

//Only get it to show previews of normal app
export interface Permissions {
    id: string
    name: string
}

//Only get it to show previews of employee app
export interface EmployeePermissions {
    id: string
    name: string
}

//Only get it on admin app
export interface AdminPermissions {
    id: string
    name: string
}

export interface SpecialUpgrades {
    uid:string
    adminUpgradesList: any
}

export interface AdminUpgrades {
    id: string
    name: string
    description: string
    duration: number
    price: number
    general: boolean
    tax:number
    fixed:number
}

export interface AdminVipItem {
    uid:string //idUser
    createdAt:string
}
export interface AdminVip {
    uid: string //idAdmin
    listVip:any
}

export interface adminSilencedItem {
    uid: string //idEvent
    createdAt:Date
}

export interface UserSilencedAdmin {
    uid: string //idUser
    eventList
}

export interface adminBanItem {
    uid: string //idUser
    createdAt:Date
    expiresAt:Date
    expires:boolean
}

export interface AdminBanUser {
    uid: string //idAdmin
    banList
}

export interface SuperAdminBan {
    uid: string //idAdmin
    banList
}