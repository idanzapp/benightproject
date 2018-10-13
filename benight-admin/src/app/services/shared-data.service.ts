import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private header:string='Eventos'
  private tabs:Object={info:true}
  private eventos:Object={}
  private back_button:boolean=false
  private back_url:string=''
  
  set(variable, setter) {
    switch (variable) {
      case 'header':
        this.header = setter
        break
      case 'tabs':
        this.tabs = setter
        break
      case 'eventos':
        this.eventos = setter
        break
      case 'back-button':
        this.back_button = setter
        break   
      case 'back_url':
        this.back_url = setter
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
      case 'eventos':
        return this.eventos
      case 'back-button':
        return this.back_button
      case 'back-url':
        return this.back_url  
      default:
        break
    }
  }
}
