import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FilePickerPage } from './file-picker.page'

const routes: Routes = [
  {
    path: '',
    component: FilePickerPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilePickerRoutingModule { }