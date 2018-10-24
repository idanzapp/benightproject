import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListTagsPage } from '@bn8-imports/imports.views'
import { ListTagsRoutingModule } from '@bn8-imports/imports.routing'

@NgModule({
  imports: [
    ...myBaseModules,
    ListTagsRoutingModule
  ],
  declarations: [ListTagsPage]
})
export class ListTagsPageModule {}
