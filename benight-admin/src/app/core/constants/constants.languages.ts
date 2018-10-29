import { environment } from '@bn8-environments/environment'

/*export namespace languages {
    
    export const es = 'es-ES'
    export const fr = 'fr-FR'
    export const pt = 'pt-PT'
    export const en = 'en-EN'      
    
    export const language_list = [
      'assets/icon/Es.png',
      'assets/icon/En.png',
      'assets/icon/Fr.png',
      'assets/icon/Pt.png'
    ]
} */ 
  
  export const language = {
    es: 'es-ES',
    en: 'en-EN',
    fr: 'fr-FR',
    pt: 'pt-PT'
  }  
  
  export const languageIcon = {
    es_icon: 'assets/icon/Es.png',
    en_icon: 'assets/icon/Es.png',
    fr_icon: 'assets/icon/Es.png',
    pt_icon: 'assets/icon/Es.png'
  }

  export const languageEnvironment = {
    es: environment.firebase_es_ES,
    en: environment.firebase_en_EN,
    fr: environment.firebase_fr_FR,
    pt: environment.firebase_pt_PT
  }

  