import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the ParametersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParametersProvider {
  

  public distanceSystem: boolean;
  DistanceSystemObs: Subject<boolean>;

  public weightSystem: boolean;
  weightSystemObs: Subject<boolean>;

  constructor(public http: HttpClient, private storage:Storage) {
    console.log('Hello ParametersProvider Provider');
    this.DistanceSystemObs = new Subject<boolean>();
    this.weightSystemObs = new Subject<boolean>();
    this.storage.get(parametersString.DISTANCE_SYSTEM.toString()).then( (data)=> this.DistanceSystemObs.next(data));

    this.storage.get(parametersString.DISTANCE_SYSTEM.toString()).then( (data)=> this.weightSystemObs.next(data));
  }
  public getDistanceSystem(){
    // console.log("parametersString dist param", parametersString.DISTANCE_SYSTEM.toString())
    this.storage.get(parametersString.DISTANCE_SYSTEM.toString()).then( (data)=> {this.distanceSystem = data; this.DistanceSystemObs.next(data)});
  }

  public setDistanceSystem(value: boolean){
    // console.log("parametersString dist param", parametersString.DISTANCE_SYSTEM.toString())
    this.storage.set(parametersString.DISTANCE_SYSTEM.toString(), value).then(data => {
      this.distanceSystem = value; 
      this.DistanceSystemObs.next(value);
    });
  }

  public getWeightSystem(){
    this.storage.get(parametersString.WEIGHT_SYSTEM.toString()).then( (data)=> {this.weightSystem = data; this.weightSystemObs.next(data)});
  }

  public setWeightSystem(isKilogram: boolean){
    this.storage.set(parametersString.WEIGHT_SYSTEM.toString(), isKilogram).then(data => {
      this.weightSystem = isKilogram; 
      this.weightSystemObs.next(isKilogram);
    });
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
