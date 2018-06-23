import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { RocketPage } from '../../pages/rocket/rocket';
import { LaunchPage } from '../../pages/launch/launch';
import { CompanyPage } from '../../pages/company/company';
import { LaunchPadPage } from '../../pages/launch-pad/launch-pad';

/*
  Generated class for the ConstantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConstantProvider Provider');
  }

  public pages(){
    return [
      { title: 'Home', imgPath:"",component: HomePage },
      { title: 'Rockets', imgPath:"assets/imgs/rockets.png", component: RocketPage },
      { title: 'Launches', imgPath:"assets/imgs/launch.png", component: LaunchPage },
      { title: 'About Tesla', imgPath:"assets/imgs/CompanyLogo.png", component: CompanyPage },
      { title: 'Launch pads', imgPath:"assets/imgs/launchpad.png", component: LaunchPadPage },
      
    ];
  }

}
