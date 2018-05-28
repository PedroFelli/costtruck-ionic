import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class OfertasProvider {
  private PATH = 'ofertas/'


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

  save(oferta: any) {
    return new Promise((resolve, reject) => {
      if (oferta.key) {
        this.db.list(this.PATH)
          .update(oferta.key, { carga: oferta.carga, ds_oferta: oferta.ds_oferta, dt_previsao: oferta.dt_previsao,
          ds_endereco_retirada: oferta.ds_endereco_retirada, nr_distancia: oferta.nr_distancia, cf_entrega: oferta.nr_distancia  })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ carga: oferta.carga, ds_oferta: oferta.ds_oferta, dt_previsao: oferta.dt_previsao,
            ds_endereco_retirada: oferta.ds_endereco_retirada, nr_distancia: oferta.nr_distancia, cf_entrega: oferta.nr_distancia })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}
