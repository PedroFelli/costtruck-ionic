import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfertasListPage } from './ofertas-list';

@NgModule({
  declarations: [
    OfertasListPage,
  ],
  imports: [
    IonicPageModule.forChild(OfertasListPage),
  ],
})
export class OfertasListPageModule {}
