import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launch } from '../../models/Launch';
import { LaunchDetailsPage } from '../launch-details/launch-details';

/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
})
export class LaunchListPage {
  launches: Array<Launch>;
  title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.launches = this.navParams.data.list;
    this.title = this.navParams.data.name;
  }

  openLaunch(launch: Launch){
    this.navCtrl.push(LaunchDetailsPage, launch);
  }

  // getIconSuccess():string{

  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

}
