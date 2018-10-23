import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FilePickerPage } from '@bn8-imports/imports.views'

const routes: Routes = [
  {
    path: '',
    component: FilePickerPage,
    data:{
      header:'Seleccion de Archivo',
      back:true
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilePickerRoutingModule { }