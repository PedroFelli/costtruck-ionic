import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
declare var google: any;




@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {


  @ViewChild('map') map: ElementRef;

  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public platform: Platform) {
    
    }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    const position = new google.maps.LatLng(-16.291830, -48.944442);

    const options = {
      center: position,
      zoom: 15
    };

    const map = new google.maps.Map(this.map.nativeElement, options);

  }

 
}
