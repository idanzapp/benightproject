import { Component, OnInit, Input } from '@angular/core'
import { languages } from '@bn8-interfaces/interfaces.languages'

@Component({
  selector: 'preview-eventos',
  templateUrl: './preview-eventos.page.html',
  styleUrls: ['./preview-eventos.page.scss'],
})
export class PreviewEventosPage implements OnInit {

  list: string[] = languages.language_list
  selected = ''
  @Input() event: any

  constructor() { }

  ngOnInit() {
    let idx
    switch (navigator.language) {
      case languages.es:
        idx = 0
        break
      case languages.fr:
        idx = 2
        break
      case languages.pt:
        idx = 3
        break
      default:
        idx = 1 
    }  
    this.selected = this.list[idx]
  }

  selectLanguage(language) {
    this.selected = language
  }

}