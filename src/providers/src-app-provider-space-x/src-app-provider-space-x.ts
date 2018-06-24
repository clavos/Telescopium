import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Company, Companyhistory } from '../../models/Company';
import { Rocket } from '../../models/Rocket';
import { Capsule, CapsuleDetails } from '../../models/Capsule';
import { LaunchPad } from '../../models/LaunchPad';
import { Launch } from '../../models/Launch';
import { Core } from '../../models/Core';

/*
  Generated class for the SrcAppProviderSpaceXProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SrcAppProviderSpaceXProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SrcAppProviderSpaceXProvider Provider');
  }

  data: string;

  getCompanyHistory() {
    return this.http.get('https://api.spacexdata.com/v2/info/history')
    .map(response => {return response as Array<Companyhistory>})
  }
  getCompany() {
    return this.http.get('https://api.spacexdata.com/v2/info')
    .map(response => {return response as Company})
  }

  getRockets(rocket: string = null){
    return this.http.get('https://api.spacexdata.com/v2/rockets/' + rocket)
    .map(response => response as Array<Rocket>)
  }

  getCapsules(){
    return this.http.get('https://api.spacexdata.com/v2/capsules')
    .map(response => response as Array<Capsule>)
  }

  getLaunchPads(){
    return this.http.get('https://api.spacexdata.com/v2/launchpads')
    .map(response => response as Array<LaunchPad>)
  }

  getLaunches(){
    return this.http.get('https://api.spacexdata.com/v2/launches')
    .map(response => response as Array<Launch>)
  }

  getCapsuleDetails(){
    return this.http.get('https://api.spacexdata.com/v2/parts/caps')
    .map(response => response as Array<CapsuleDetails>)
  }

  getCores(){
    return this.http.get('https://api.spacexdata.com/v2/parts/cores')
    .map(response => response as Array<Core>)
  }
}
