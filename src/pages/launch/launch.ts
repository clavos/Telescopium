import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { SrcAppProviderSpaceXProvider } from '../../providers/src-app-provider-space-x/src-app-provider-space-x';
import { Launch } from '../../models/Launch';
import { LaunchListPage } from '../launch-list/launch-list';
import { LaunchDetailsPage } from '../launch-details/launch-details';

/**
 * Generated class for the LaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch',
  templateUrl: 'launch.html',
})
export class LaunchPage {
  launchType: string = "nextLaunches";

  launchesNext: Array<Launch>;
  launchesPast: Array<Launch>;
  launchesAll: Array<Launch>;

  private loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: SrcAppProviderSpaceXProvider, private loadCtrl: LoadingController, private toastCtrl: ToastController) {
    
    this.loader = this.loadCtrl.create({
      content: 'Please wait...'
    });
    this.provider.getAllLaunches().subscribe(data => {
      this.launchesAll = data;
      this.loader.dismiss();
    }, ()=>{this.toastCtrl.create({
      message: 'An error occured while retrieving API datas',
      duration: 5000
    })})
    this.provider.getAllNextLaunches().subscribe(data => {
      this.launchesNext = data;
      this.loader.dismiss();
    }, ()=>{this.toastCtrl.create({
      message: 'An error occured while retrieving API datas',
      duration: 5000
    })})
    this.provider.getAllpastLaunches().subscribe(data => {
      this.launchesPast = data;
      this.loader.dismiss();
    }, ()=>{this.toastCtrl.create({
      message: 'An error occured while retrieving API datas',
      duration: 5000
    })})
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LaunchPage');
  }

  // openAllLaunches(){
  //   this.provider.getAllLaunches().subscribe(data=>{
  //     this.navCtrl.push(LaunchListPage, {name:"All launches", list: data});
  //   })
  // }

  // openAllNextLaunches(){
  //   this.provider.getAllNextLaunches().subscribe(data=>{
  //     this.navCtrl.push(LaunchListPage, {name:"All next launches", list: data});
  //   })
  // }

  // openAllPastLaunches(){
  //   this.provider.getAllpastLaunches().subscribe(data=>{
  //     this.navCtrl.push(LaunchListPage, {name:"All past launches", list: data});
  //   })
  // }

  // public openNextLaunch(){
  //   this.provider.getNextLaunch().subscribe(data=>{
  //     this.navCtrl.push(LaunchDetailsPage, data);
  //   })
  // }

  // public openLastLaunch(){
  //   this.provider.getLastLaunch().subscribe(last=>{
  //     this.navCtrl.push(LaunchDetailsPage, last);
  //   })
  // }

  openLaunch(launch: Launch){
    this.navCtrl.push(LaunchDetailsPage, launch);
  }
}
