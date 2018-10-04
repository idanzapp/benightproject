import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private header:string='Eventos'
  private tabs:Object={info:true}
  
  set(variable, setter) {
    switch (variable) {
      case 'header':
        this.header = setter
        break
      case 'tabs':
        this.tabs = setter
        break
      default:
        break
    }
  }

  get(variable) {
    switch (variable) {
      case 'header':
        return this.header
      case 'tabs':
        return this.tabs
      default:
        break
    }
  }
}
