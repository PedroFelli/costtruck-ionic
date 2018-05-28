import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { OfertasProvider } from "./../../providers/ofertas/ofertas";
import { Observable} from "rxjs/Observable";


@IonicPage()
@Component({
  selector: 'page-ofertas-list',
  templateUrl: 'ofertas-list.html',
})
export class OfertasListPage {
  ofertas: Observable <any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: OfertasProvider,
  private toast: ToastController) {
  
    this.ofertas = this.provider.getAll();
  }

  newOferta(){
    this.navCtrl.push('OfertaPage');
  }

  editOferta(ofertas: any) {
    //maneira 1
    this.navCtrl.push('OfertaPage', { oferta: ofertas });
  }

  removeOferta(key: string) {
    this.provider.remove(key)
      .then(() => {
        this.toast.create({ message: 'Oferta removida sucesso.', duration: 3000 }).present();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao remover a oferta', duration: 3000 }).present();
      })
  }

}
