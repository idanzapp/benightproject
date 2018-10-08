import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ListTagsPage } from './list-tags.page'

const routes: Routes = [
  {
    path: '',
    component: ListTagsPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTagsRoutingModule { }