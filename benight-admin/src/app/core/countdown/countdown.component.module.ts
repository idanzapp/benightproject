import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { CountdownComponent } from '@bn8-core/countdown/countdown.component'

@NgModule({
  imports: [
    ...myBaseModules,
  ],
  declarations: [CountdownComponent],
  exports: [CountdownComponent]
})
export class CountdownComponentModule {}