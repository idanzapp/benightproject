
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { EventHandlerPage } from './event-handler.page'

const routes: Routes = [
  {
    path: '',
    component: EventHandlerPage, /*canActivate: [ DevNavAuthGuard1Service ],*/
    children: [
      {
        path: '', /*canActivateChild: [ DevNavAuthGuard1Service ],*/
        children: [
          { path: '', redirectTo: 'eventos', pathMatch: 'full'  },
          { path: 'eventos', loadChildren: './eventos/eventos.page.module#EventosPageModule' },
          { path: 'planes', loadChildren: './planes/planes.page.module#PlanesPageModule' },
          { path: 'clubs', loadChildren: './clubs/clubs.page.module#ClubsPageModule' },          
          { path: 'mapa', loadChildren: './mapa/mapa.page.module#MapaPageModule' },
          
          { path: '**', redirectTo: 'eventos', pathMatch: 'full' }

        ]
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventHandlerRoutingModule { }