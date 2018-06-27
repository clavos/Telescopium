import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Launch } from '../../models/Launch';
import { ParametersPopoverPage } from '../parameters-popover/parameters-popover';
import { ParametersProvider } from '../../providers/parameters/parameters';
import { Subscription } from 'rxjs/Subscription';
import { RocketDetailsPage } from '../rocket-details/rocket-details';
import { SrcAppProviderSpaceXProvider } from '../../providers/src-app-provider-space-x/src-app-provider-space-x';
import { LaunchpadDetailsPage } from '../launchpad-details/launchpad-details';

/**
 * Generated class for the LaunchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-details',
  templateUrl: 'launch-details.html',
})
export class LaunchDetailsPage {
  launch: Launch;
  distSys: boolean;
  wghtSys: boolean;

  private _distSysSub: Subscription;
  private _wghtSysSub: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private parameters: ParametersProvider, private popoverCtrl: PopoverController, private provider: SrcAppProviderSpaceXProvider) {
    this.launch = this.navParams.data;
    console.log(this.launch)
    this._distSysSub = this.parameters.DistanceSystemObs.subscribe(data =>
      this.distSys = data);
    this._wghtSysSub = this.parameters.weightSystemObs.subscribe(data =>
      this.wghtSys = data);
    this.parameters.getDistanceSystem();
    this.parameters.getWeightSystem()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchDetailsPage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ParametersPopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  convertDate(dateString: string){
    return new Date(dateString);
  }

  OpenRocket(rocket_id:string){
    this.provider.getRockets(rocket_id).subscribe(data=>{console.log("rocket from launch",data);this.navCtrl.push(RocketDetailsPage, data)})
  }

  OpenLaunchpad(launchpad_id:string){
    this.provider.getLaunchPads(launchpad_id).subscribe(launchpad=>{console.log(launchpad);this.navCtrl.push(LaunchpadDetailsPage, launchpad)})
  }

  isFutureLaunch():boolean{
    return Date.now() < Date.parse(this.launch.launch_date_utc);
  }

  openLink(URL:string){
    window.open(URL, '_system', 'location=yes')
  }

  ngOnDestroy(): void {
    this._distSysSub.unsubscribe();
    this._wghtSysSub.unsubscribe();
  }
}
