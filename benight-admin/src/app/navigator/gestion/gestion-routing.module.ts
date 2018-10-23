import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { GestionPage } from '@bn8-imports/imports.views'

const routes: Routes = [
    {
      path: '',
      component: GestionPage,
      children: [          
        { path: '', redirectTo: 'eventos', pathMatch: 'full' }, 
        { path: 'eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },
        { path: 'clubs', loadChildren: './clubs/clubs.module#ClubsPageModule' },
        { path: 'planes', loadChildren: './planes/planes.module#PlanesPageModule' },
        { path: 'entradas', loadChildren: './entradas/entradas.module#EntradasPageModule' },
        { path: 'empleados', loadChildren: './empleados/empleados.module#EmpleadosPageModule' },
        { path: 'promos', loadChildren: './promos/promos.module#PromosPageModule' },          
        { path: '**', redirectTo: '', pathMatch: 'full' }         
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }