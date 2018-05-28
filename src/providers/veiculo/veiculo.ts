import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";


@Injectable()
export class VeiculoProvider {
  private PATH = 'veiculos';

  constructor(private db: AngularFireDatabase) {}

  getAll() {
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })

  }


  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges().map(c => {
      return { key: c.key, ...c.payload.val() };
    })
  }

  save(veiculo: any) {
    return new Promise((resolve, reject) => {
      if (veiculo.key) {
        this.db.list(this.PATH)
          .update(veiculo.key, { 
            usuario: veiculo.usuario,
            nr_placa: veiculo.nr_placa,
            dr_modelo: veiculo.dr_modelo,
            ds_marca: veiculo.ds_marca,
            tp_veiculos: veiculo.tp_veiculos,
            nr_ano: veiculo.nr_ano
           })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ 
            usuario: veiculo.usuario,
            nr_placa: veiculo.nr_placa,
            dr_modelo: veiculo.dr_modelo,
            ds_marca: veiculo.ds_marca,
            tp_veiculos: veiculo.tp_veiculos,
            nr_ano: veiculo.nr_ano
           })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
