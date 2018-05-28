import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { FreteProvider } from "./../../providers/frete/frete";
import { Observable } from "rxjs/Observable";


@IonicPage()
@Component({
  selector: 'page-frete-list',
  templateUrl: 'frete-list.html',
})
export class FreteListPage {
  fretes: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: FreteProvider,
    private toast: ToastController) {

    this.fretes = this.provider.getAll();
  }

  newFrete() {
    this.navCtrl.push('FretePage');
  }

  editFrete(fretes: any) {
    //maneira 1
    this.navCtrl.push('FretePage', { frete: fretes });
  }

  removeFrete(key: string) {
    this.provider.remove(key)
      .then(() => {
        this.toast.create({ message: 'Frete renivudi com sucesso.', duration: 3000 }).present();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao remover frete', duration: 3000 }).present();
      })
  }

}
