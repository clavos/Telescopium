import { CoreDetailsPage } from './../core-details/core-details';
import { Core } from './../../models/Core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SrcAppProviderSpaceXProvider } from '../../providers/src-app-provider-space-x/src-app-provider-space-x';

/**
 * Generated class for the CoreListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-core-list',
  templateUrl: 'core-list.html',
})
export class CoreListPage {
  cores: Array<Core>;
  private spinner: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: SrcAppProviderSpaceXProvider, private loadingCtrl: LoadingController) {
  }

  openCore(core: Core){
    this.navCtrl.push(CoreDetailsPage, core);
  }

  getColorStatusCore(core: Core):string{
    switch(core.status){
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

  ionViewDidLoad() {
    this.spinner = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.spinner.present();
    this.provider.getCores().subscribe(data => {
      this.cores = data;
    }, ()=> console.log("error"), () => this.spinner.dismiss())
    console.log('ionViewDidLoad CoreListPage');
  }

}
