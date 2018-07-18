import { CapsuleDetails } from './../../models/Capsule';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CapsuleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-details',
  templateUrl: 'capsule-details.html',
})
export class CapsuleDetailsPage {
  capsuleDetails: CapsuleDetails;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.capsuleDetails = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsuleDetailsPage');
  }

}
