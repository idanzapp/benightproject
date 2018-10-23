import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PlanesPage } from '@bn8-imports/imports.views'

const routes: Routes = [
    {
      path: '',
      component: PlanesPage,
      data:{
        header:'Planes',
        back:false
      },
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }