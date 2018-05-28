import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { VeiculoProvider } from "./../../providers/veiculo/veiculo";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-veiculo',
  templateUrl: 'veiculo.html',
})

export class VeiculoPage {
  title: string;
  form: FormGroup;
  veiculo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: VeiculoProvider,
    private toast: ToastController) {

    this.veiculo = this.navParams.data.veiculo || {};
    this.createForm();

    this.setupPageTitle();    
    
  
  }
    private setupPageTitle() {
    this.title = this.navParams.data.veiculo ? 'Editar veiculo' : 'Novo veiculo'
  }


  createForm() {
    this.form = this.formBuilder.group({
      key: [this.veiculo.key],
      usuario: [this.veiculo.carga, Validators.required],
      nr_placa: [this.veiculo.carga, Validators.required],
      dr_modelo: [this.veiculo.carga, Validators.required],
      ds_marca: [this.veiculo.carga, Validators.required],
      tp_veiculos: [this.veiculo.carga, Validators.required],
      nr_ano: [this.veiculo.carga, Validators.required],
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Veiculo salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Error ao salvar veiculo.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }

}
