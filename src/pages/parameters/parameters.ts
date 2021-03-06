import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParametersProvider } from '../../providers/parameters/parameters';
import { Subscription } from 'rxjs/Subscription';

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
  DistanceSystem: boolean;
  weightSystem: boolean;

  private _distSysSub: Subscription;
  private _wghtSysSub: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private parameters: ParametersProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametersPage');
    this._distSysSub = this.parameters.DistanceSystemObs.subscribe(data =>
      this.DistanceSystem = data);
    this._wghtSysSub = this.parameters.weightSystemObs.subscribe(data =>
      this.weightSystem = data);
    this.parameters.getDistanceSystem();
    this.parameters.getWeightSystem();
  }

  public onDistanceChange() {
    this.parameters.setDistanceSystem(this.DistanceSystem);
  }

  public onWeightChange() {
    this.parameters.setWeightSystem(this.weightSystem);
  }

  ngOnDestroy(): void {
    this._distSysSub.unsubscribe();
    this._wghtSysSub.unsubscribe();
  }
}
