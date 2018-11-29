import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PreferenciasPage } from '@bn8-imports/imports.views'
import { UserLevelGuard } from '@bn8-services/user-level.guard'

const routes: Routes = [
    {
      path: '',
      component: PreferenciasPage,
      data:{
        header:'Preferencias',
        back:false
      },
      canActivate: [UserLevelGuard],
      children: [          
        { path: '', redirectTo: 'evento', pathMatch: 'full' },
        { path: 'evento', loadChildren:'./evento/default-event.module#DefaultEventPageModule'  },
        { path: 'plan', loadChildren: './plan/default-plan.module#DefaultPlanPageModule' },
        { path: 'localizacion', loadChildren: './localizacion/default-location.module#DefaultLocationPageModule' },
        { path: 'ticket', loadChildren: './ticket/default-ticket.module#DefaultTicketPageModule' },
        { path: 'promo', loadChildren: './promo/default-promo.module#DefaultPromoPageModule' },
        { path: 'notification', loadChildren: './notificacion/default-notification.module#DefaultNotificationPageModule' },
        { path: 'chat', loadChildren: './chat/default-chat.module#DefaultChatPageModule' },      
        { path: '**', redirectTo: '', pathMatch: 'full' }  
      ]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenciasRoutingModule { }