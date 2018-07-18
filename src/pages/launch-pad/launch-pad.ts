import { LaunchPad } from './../../models/LaunchPad';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SrcAppProviderSpaceXProvider } from '../../providers/src-app-provider-space-x/src-app-provider-space-x';
import { LaunchpadDetailsPage } from '../launchpad-details/launchpad-details';

/**
 * Generated class for the LaunchPadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-pad',
  templateUrl: 'launch-pad.html',
})
export class LaunchPadPage {
  launchpads: Array<LaunchPad>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXProvider: SrcAppProviderSpaceXProvider) {
  }

  ionViewDidLoad() {
    this.spaceXProvider.getLaunchPads().subscribe(data => this.launchpads = data )
    console.log('ionViewDidLoad LaunchPadPage');
  }
  openLaunchpad(launchpad: LaunchPad){
    this.navCtrl.push(LaunchpadDetailsPage, launchpad);
  }

  getColorStatusLaunchpad(launchPad: LaunchPad): string{
    switch(launchPad.status){
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
}
