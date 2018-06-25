import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SrcAppProviderSpaceXProvider } from '../../providers/src-app-provider-space-x/src-app-provider-space-x';
import { Rocket } from '../../models/Rocket';
import { RocketDetailsPage } from '../rocket-details/rocket-details';

/**
 * Generated class for the RocketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket',
  templateUrl: 'rocket.html',
})
export class RocketPage {
  public rockets: Rocket[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXservice: SrcAppProviderSpaceXProvider) {
    
  }

  ionViewDidLoad() {
    this.spaceXservice.getRockets().subscribe(data => {
      this.rockets = data;
    }, ()=> console.log("error"))
    console.log('ionViewDidLoad RocketPage');
  }

  navigate(rocket: Rocket){
    this.navCtrl.push(RocketDetailsPage, rocket);
  }
}
