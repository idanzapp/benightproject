import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { ListTagsPage } from './list-tags.page'
import { ListTagsRoutingModule } from './list-tags-routing.module'

@NgModule({
  imports: [
    ...myBaseModules,
    ListTagsRoutingModule
  ],
  declarations: [ListTagsPage]
})
export class ListTagsPageModule {}
