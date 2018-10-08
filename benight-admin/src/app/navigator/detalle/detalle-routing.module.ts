import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DetallePage } from '@bn8-core/imports'

const routes: Routes = [
    {
      path: '',
      component: DetallePage,
      children: [          
        { path: '', redirectTo: 'detalle-info', pathMatch: 'full' },
        { path: 'list-entradas', loadChildren: './list-entradas/list-entradas.module#ListEntradasPageModule' },
        { path: 'list-clubs', loadChildren: './list-clubs/list-clubs.module#ListClubsPageModule' },
        { path: 'list-propietarios', loadChildren: './list-propietarios/list-propietarios.module#ListPropietariosPageModule' },
        { path: 'list-fechas', loadChildren: './list-fechas/list-fechas.module#ListFechasPageModule' },
        { path: 'file-picker', loadChildren: './file-picker/file-picker.module#FilePickerPageModule' },
        { path: 'list-estadisticas', loadChildren: './list-estadisticas/list-estadisticas.module#ListEstadisticasPageModule' },
        { path: 'list-requisitos', loadChildren: './list-requisitos/list-requisitos.module#ListRequisitosPageModule' },
        { path: 'list-listas', loadChildren: './list-listas/list-listas.module#ListListasPageModule' },
        { path: 'list-traducciones', loadChildren: './list-traducciones/list-traducciones.module#ListTraduccionesPageModule' },
        { path: 'list-empleados', loadChildren: './list-empleados/list-empleados.module#ListEmpleadosPageModule' },
        { path: 'list-publico', loadChildren: './list-publico/list-publico.module#ListPublicoPageModule' },
        { path: 'list-tags', loadChildren: './list-tags/list-tags.module#ListTagsPageModule' },     
        { path: 'detalle-info', loadChildren: './detalle-info/detalle-info.module#DetalleInfoPageModule' },
        { path: '**', redirectTo: '', pathMatch: 'full' }  
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
  

  ]
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleRoutingModule { }