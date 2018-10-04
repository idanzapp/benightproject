export interface User  {
    uid:string
    name:string
    age:number
    admin:boolean
}

export function createID() {
    return 'bn8-'+Date.now().toString()
}