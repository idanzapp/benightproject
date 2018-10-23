import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListTagsPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: ListTagsPage,
    data:{
      header:'Tags',
      back:false
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTagsRoutingModule { }