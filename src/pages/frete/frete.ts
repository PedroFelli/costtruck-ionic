import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FreteProvider } from "./../../providers/frete/frete";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-frete',
  templateUrl: 'frete.html',
})
export class FretePage {

  title: string;
  form: FormGroup;
  frete: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: FreteProvider,
    private toast: ToastController) {

    this.frete = this.navParams.data.frete || {};
    this.createForm();

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Editar frete' : 'Novo frete'
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.frete.key],
      cd_oferta: [this.frete.cd_oferta, Validators.required],
      cd_motorista: [this.frete.cd_motorista, Validators.required],
      dt_retirada: [this.frete.dt_retirada, Validators.required],
      dt_entrega: [this.frete.dt_entrega, Validators.required],
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Frete salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Error ao salvar o frete.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}
