import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SrcAppProviderSpaceXProvider } from '../../providers/src-app-provider-space-x/src-app-provider-space-x';
import { Company } from '../../models/Company';

/**
 * Generated class for the CompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {
  public Company: Company;

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXservice: SrcAppProviderSpaceXProvider) {
    spaceXservice.getCompany().subscribe(data => {
      this.Company = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

}
