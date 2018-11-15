import { NgModule } from '@angular/core'

import { myBaseModules } from '@bn8-imports/imports.main'
import { DetalleInfoEntradaPage } from '@bn8-imports/imports.views'
import { PreviewEntradaPage } from '@bn8-imports/imports.previews'
import { DetalleInfoEntradaRoutingModule } from '@bn8-imports/imports.routing'

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    ...myBaseModules,
    ReactiveFormsModule,
    DetalleInfoEntradaRoutingModule
  ],
  entryComponents:[PreviewEntradaPage],
  declarations: [DetalleInfoEntradaPage, PreviewEntradaPage]
})
export class DetalleInfoEntradaPageModule {}
