import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LaunchPad } from '../../models/LaunchPad';
import { SrcAppProviderSpaceXProvider } from '../../providers/src-app-provider-space-x/src-app-provider-space-x';
import { RocketDetailsPage } from '../rocket-details/rocket-details';

/**
 * Generated class for the LaunchpadDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-details',
  templateUrl: 'launchpad-details.html',
})
export class LaunchpadDetailsPage {
  launchpad: LaunchPad;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider:SrcAppProviderSpaceXProvider, private taostCtrl: ToastController) {
    this.launchpad = this.navParams.data;
    console.log(this.launchpad);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadDetailsPage');
  }

  openRocket(rocket_id:string){
    rocket_id =  rocket_id.replace(" ", "");
    rocket_id =  rocket_id.toLowerCase();
    this.provider.getRockets(rocket_id).subscribe(data=>{
      if(data){
        this.navCtrl.push(RocketDetailsPage, data);
      }else{
        this.taostCtrl.create({
          message:"No rocket could be retrieved",
          duration: 5000
        })
      }      
    })
  }
}
