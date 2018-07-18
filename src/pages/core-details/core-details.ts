import { Core } from './../../models/Core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoreDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-core-details',
  templateUrl: 'core-details.html',
})
export class CoreDetailsPage {
  core: Core;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.core = this.navParams.data;
  }

  getColorStatusCore(core: Core):string{
    switch(core.status){
      case "expended":
        return "yellow";
      case "destroyed":
        return "red";
      case "retired":
        return "grey";
      case "active":
        return "green";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoreDetailsPage');
  }

}
