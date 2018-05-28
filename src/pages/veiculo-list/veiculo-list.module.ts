import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VeiculoListPage } from './veiculo-list';

@NgModule({
  declarations: [
    VeiculoListPage,
  ],
  imports: [
    IonicPageModule.forChild(VeiculoListPage),
  ],
})
export class VeiculoListPageModule {}
