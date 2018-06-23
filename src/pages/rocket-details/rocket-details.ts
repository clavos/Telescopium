import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rocket } from '../../models/Rocket';

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
  @Input() rocket:Rocket;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketDetailsPage');
  }
}
