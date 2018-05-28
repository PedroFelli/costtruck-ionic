import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ContactProvider } from "./../../providers/contact/contact";
import { OfertasProvider } from "./../../providers/ofertas/ofertas";
import { VeiculoProvider } from "./../../providers/veiculo/veiculo";
import { FreteProvider } from "./../../providers/frete/frete";

import { Observable } from "rxjs/Observable";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contacts: Observable <any>;

  constructor(public navCtrl: NavController,private toast: ToastController) {

  }

  oferta(){
    this.navCtrl.push('OfertasListPage');
  }

  frete() {
    this.navCtrl.push('FreteListPage');
  }
  veiculos(){
    this.navCtrl.push('VeiculoListPage');
  }
  
  map(){
    this.navCtrl.push('MapPage');
  }

  newContact(){
    this.navCtrl.push('ContactPage');
  }

  editContact(contact: any){
    //maneira 1
    this.navCtrl.push('ContactPage', { contact : contact});
  }


}
