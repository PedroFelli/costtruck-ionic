import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class FreteProvider {
  private PATH = 'fretes/';


  constructor(private db: AngularFireDatabase) { }

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

  save(frete: any) {
    return new Promise((resolve, reject) => {
      if (frete.key) {
        this.db.list(this.PATH)
          .update(frete.key, { 
            cd_oferta: frete.cd_oferta, 
            cd_motorista: frete.cd_motorista,
            dt_retirada: frete.dt_retirada,
            dt_entrega: frete.dt_entrega
          })
            .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ 
            cd_oferta: frete.cd_oferta,
            cd_motorista: frete.cd_motorista,
            dt_retirada: frete.dt_retirada,
            dt_entrega: frete.dt_entrega
           })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}