import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SrcAppProviderSpaceXProvider } from '../../providers/src-app-provider-space-x/src-app-provider-space-x';
import { LaunchPad } from '../../models/LaunchPad';

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
  launchPads: Array<LaunchPad>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXProvider: SrcAppProviderSpaceXProvider) {
  }

  ionViewDidLoad() {
    this.spaceXProvider.getLaunchPads().subscribe(data => this.launchPads = data )
    console.log('ionViewDidLoad LaunchPadPage');
  }

}
