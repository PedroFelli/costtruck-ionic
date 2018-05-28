import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreteListPage } from './frete-list';

@NgModule({
  declarations: [
    FreteListPage,
  ],
  imports: [
    IonicPageModule.forChild(FreteListPage),
  ],
})
export class FreteListPageModule {}
