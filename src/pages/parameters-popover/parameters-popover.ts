import { Component } from '@angular/core';
import { ViewController, ToastController } from 'ionic-angular';
import { ParametersProvider } from '../../providers/parameters/parameters';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: 'parameters-popover.html',
})
export class ParametersPopoverPage {
  DistanceSystem: boolean;
  weightSystem: boolean;

  private _distSysSub: Subscription;
  private _wghtSysSub: Subscription;

  constructor(public viewCtrl: ViewController, private parameters: ParametersProvider, private toastCtrl: ToastController) {
    this._distSysSub = this.parameters.DistanceSystemObs.subscribe(data =>
      this.DistanceSystem = data);
    this._wghtSysSub = this.parameters.weightSystemObs.subscribe(data =>
      this.weightSystem = data);
    this.parameters.getDistanceSystem();
    this.parameters.getWeightSystem();
  }

  close() {
    this.viewCtrl.dismiss();
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
