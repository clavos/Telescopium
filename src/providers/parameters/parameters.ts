import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ParametersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParametersProvider {
  DistanceSystem: boolean;
  constructor(public http: HttpClient, private storage:Storage) {
    console.log('Hello ParametersProvider Provider');
  }
  getDistanceSystem(){
    // console.log("parametersString dist param", parametersString.DISTANCE_SYSTEM.toString())
    return this.storage.get(parametersString.DISTANCE_SYSTEM.toString());
  }

  public setDistanceSystem(value: boolean){
    // console.log("parametersString dist param", parametersString.DISTANCE_SYSTEM.toString())
    return this.storage.set(parametersString.DISTANCE_SYSTEM.toString(), value);
  }

  getWeightSystem(){
    return this.storage.get(parametersString.WEIGHT_SYSTEM.toString());
  }

  public setWeightSystem(isKilogram: boolean){
    return this.storage.set(parametersString.WEIGHT_SYSTEM.toString(), isKilogram);
  }

  initializeData(){
    this.storage.get(parametersString.DISTANCE_SYSTEM.toString()).then(
      data => {
        if(data == null){
          this.storage.set(parametersString.DISTANCE_SYSTEM.toString(), true)
        }
      }
    )

    this.storage.get(parametersString.WEIGHT_SYSTEM.toString()).then(
      data => {
        if(data == null){
          this.storage.set(parametersString.WEIGHT_SYSTEM.toString(), true)
        }
      }
    )
  }
}

export enum parametersString{
  DISTANCE_SYSTEM,
  WEIGHT_SYSTEM
}
