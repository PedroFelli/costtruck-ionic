import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FretePage } from './frete';

@NgModule({
  declarations: [
    FretePage,
  ],
  imports: [
    IonicPageModule.forChild(FretePage),
  ],
})
export class FretePageModule {}
