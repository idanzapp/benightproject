import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PromosPage } from '@bn8-imports/imports.views'

const routes: Routes = [
    {
      path: '',
      component: PromosPage,
      data:{
        header:'Promos',
        back:false
      },
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromosRoutingModule { }