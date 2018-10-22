import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DetallePage } from '@bn8-imports/imports.views'

const routes: Routes = [
    {
      path: '',
      component: DetallePage,
      children: [          
        { path: '', redirectTo: 'detalle-info-event', pathMatch: 'full' },
        { path: 'list-entradas/:id', loadChildren: './list-entradas/list-entradas.module#ListEntradasPageModule' },
        { path: 'list-clubs/:id', loadChildren: './list-clubs/list-clubs.module#ListClubsPageModule' },
        { path: 'list-propietarios/:id', loadChildren: './list-propietarios/list-propietarios.module#ListPropietariosPageModule' },
        { path: 'list-fechas/:id', loadChildren: './list-fechas/list-fechas.module#ListFechasPageModule' },
        { path: 'file-picker/:id', loadChildren: './file-picker/file-picker.module#FilePickerPageModule' },
        { path: 'list-estadisticas/:id', loadChildren: './list-estadisticas/list-estadisticas.module#ListEstadisticasPageModule' },
        { path: 'list-requisitos/:id', loadChildren: './list-requisitos/list-requisitos.module#ListRequisitosPageModule' },
        { path: 'list-listas/:id', loadChildren: './list-listas/list-listas.module#ListListasPageModule' },
        { path: 'list-traducciones/:id', loadChildren: './list-traducciones/list-traducciones.module#ListTraduccionesPageModule' },
        { path: 'list-empleados/:id', loadChildren: './list-empleados/list-empleados.module#ListEmpleadosPageModule' },
        { path: 'list-publico/:id', loadChildren: './list-publico/list-publico.module#ListPublicoPageModule' },
        { path: 'list-tags/:id', loadChildren: './list-tags/list-tags.module#ListTagsPageModule' },     
        { path: 'detalle-info-event/:id', loadChildren: './detalle-info-event/detalle-info-event.module#DetalleInfoEventPageModule' },
        { path: '**', redirectTo: '', pathMatch: 'full' }  
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleRoutingModule { }