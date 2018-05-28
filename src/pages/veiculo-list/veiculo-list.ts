import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { VeiculoProvider } from "./../../providers/veiculo/veiculo";
import { Observable } from "rxjs/Observable";


@IonicPage()
@Component({
  selector: 'page-veiculo-list',
  templateUrl: 'veiculo-list.html',
})
export class VeiculoListPage {
  veiculos: Observable<any>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private provider: VeiculoProvider,
    private toast: ToastController) {

    this.veiculos = this.provider.getAll();
  }

  newVeiculo() {
    this.navCtrl.push('VeiculoPage');
  }

  editVeiculo(veiculos: any) {
    //maneira 1
    this.navCtrl.push('VeiculoPage', { veiculo: veiculos });
  }

  removeVeiculo(key: string) {
    this.provider.remove(key)
      .then(() => {
        this.toast.create({ message: 'Veiculo removido com sucesso.', duration: 3000 }).present();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao remover veiculo  ', duration: 3000 }).present();
      })
  }


}
