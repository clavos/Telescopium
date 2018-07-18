import { CapsuleDetailsPage } from './../capsule-details/capsule-details';
import { Capsule, CapsuleDetails } from './../../models/Capsule';
import { Subscription } from 'rxjs/Subscription';
import { SrcAppProviderSpaceXProvider } from './../../providers/src-app-provider-space-x/src-app-provider-space-x';
import { ParametersProvider } from './../../providers/parameters/parameters';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the CapsulesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsules-list',
  templateUrl: 'capsules-list.html',
})
export class CapsulesListPage {
  capsules: Array<CapsuleDetails>;
  private spinner: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: SrcAppProviderSpaceXProvider, private loadingCtrl: LoadingController) {
    
  }

  openCapsule(capsule: CapsuleDetails){
    this.navCtrl.push(CapsuleDetailsPage, capsule);
  }

  ionViewDidLoad() {
    this.spinner = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.spinner.present();
    this.provider.getCapsulesDetails().subscribe(data => {
      this.capsules = data;
    }, ()=> console.log("error"), () => this.spinner.dismiss())
    console.log('ionViewDidLoad CapsulesListPage');
  }

  // public getActiveToString(capsule: CapsuleDetails): string{
  //   return (capsule.status == "active")?"Active":"Inactive";
  // }
}
