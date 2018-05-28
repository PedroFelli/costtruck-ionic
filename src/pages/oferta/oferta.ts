import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { OfertasProvider } from "./../../providers/ofertas/ofertas";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-oferta',
  templateUrl: 'oferta.html',
})
export class OfertaPage {
  title: string;
  form: FormGroup;
  oferta: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: OfertasProvider,
    private toast: ToastController) {
      
    this.oferta = this.navParams.data.oferta || {};
    this.createForm();

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterado oferta' : 'Nova oferta'
  }


  createForm() {
    this.form = this.formBuilder.group({
      
      key: [this.oferta.key],
      carga: [this.oferta.carga, Validators.required],
      ds_oferta: [this.oferta.ds_oferta, Validators.required],
      dt_previsao: [this.oferta.dt_previsao, Validators.required],
      ds_endereco_retirada: [this.oferta.ds_endereco_retirada, Validators.required],
      nr_distancia: [this.oferta.nr_distancia, Validators.required],
      cf_entrega: [this.oferta.cf_entrega, Validators.required],
    
    })
  }

  showMap() {
    this.navCtrl.push('MapPage');
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Oferta salva com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Error ao salvar a oferta.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
  

}
