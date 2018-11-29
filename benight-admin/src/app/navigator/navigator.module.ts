import { NgModule } from '@angular/core'

import { NavigatorRoutingModule } from './navigator-routing.module'
import { myBaseModules } from '@bn8-imports/imports.main'
import { NavigatorPage} from '@bn8-imports/imports.views'
import { SearchUsersPage,  SearchItemsPage} from '@bn8-imports/imports.previews'

@NgModule({
  imports: [
    ...myBaseModules,
    NavigatorRoutingModule,
  ],
  entryComponents:[SearchUsersPage, SearchItemsPage],
  declarations: [NavigatorPage,SearchUsersPage, SearchItemsPage]
})
export class NavigatorPageModule {}