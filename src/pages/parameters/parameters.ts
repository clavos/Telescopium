import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParametersProvider } from '../../providers/parameters/parameters';

/**
 * Generated class for the ParametersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parameters',
  templateUrl: 'parameters.html',
})
export class ParametersPage {
  DistanceSystem:boolean;
  weightSystem:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private parameters: ParametersProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametersPage');
    this.parameters.getDistanceSystem().then(data=>this.DistanceSystem = data);
    this.parameters.getWeightSystem().then(data=>this.weightSystem = data);
  }

  public onDistanceChange(){
    this.parameters.setDistanceSystem(this.DistanceSystem).then(data => {
      console.log(data);
    });
  }

  public onWeightChange(){
    this.parameters.setWeightSystem(this.weightSystem).then(data => {
      console.log(data);
    });
  }
}
