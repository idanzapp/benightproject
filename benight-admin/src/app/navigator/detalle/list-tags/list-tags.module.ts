import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-core/imports'
import { ListTagsPage } from './list-tags.page'
import { ListTagsRoutingModule } from './list-tags-routing.module'
import { CoreModule } from '@bn8-core/core.module'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...myBaseModules,
    CoreModule,
    RouterModule,
    ListTagsRoutingModule
  ],
  declarations: [ListTagsPage]
})
export class ListTagsPageModule {}
