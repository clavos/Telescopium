import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rocket } from '../../models/Rocket';
import { SrcAppProviderSpaceXProvider } from '../../providers/src-app-provider-space-x/src-app-provider-space-x';
import { ParametersProvider } from '../../providers/parameters/parameters';

/**
 * Generated class for the RocketDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-details',
  templateUrl: 'rocket-details.html',
})
export class RocketDetailsPage {
  rocket:Rocket;
  distSys:boolean;
  wghtSys:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: SrcAppProviderSpaceXProvider, private parameters: ParametersProvider) {
    this.rocket = this.navParams.data;
    this.parameters.getDistanceSystem().then(data =>
    this.distSys = data);
    this.parameters.getWeightSystem().then(data =>
      this.wghtSys = data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketDetailsPage');
  }
}
