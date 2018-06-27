import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Rocket } from '../../models/Rocket';
import { SrcAppProviderSpaceXProvider } from '../../providers/src-app-provider-space-x/src-app-provider-space-x';
import { ParametersProvider } from '../../providers/parameters/parameters';
import { Subscription } from 'rxjs/Subscription';
import { ParametersPopoverPage } from '../parameters-popover/parameters-popover';

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

  private _distSysSub: Subscription;
  private _wghtSysSub: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: SrcAppProviderSpaceXProvider, private parameters: ParametersProvider, private popoverCtrl:PopoverController) {
    this.rocket = this.navParams.data;
    console.log("rocket",this.rocket);
    this._distSysSub =  this.parameters.DistanceSystemObs.subscribe(data =>
    this.distSys = data);
    this._wghtSysSub =  this.parameters.weightSystemObs.subscribe(data =>
      this.wghtSys = data);
    this.parameters.getDistanceSystem();
    this.parameters.getWeightSystem()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketDetailsPage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ParametersPopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  ngOnDestroy(): void {
    this._distSysSub.unsubscribe();
    this._wghtSysSub.unsubscribe();
  } 
}
