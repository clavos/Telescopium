import { LaunchDetailsPage } from './../launch-details/launch-details';
import { Launch } from './../../models/Launch';
import { SrcAppProviderSpaceXProvider } from './../../providers/src-app-provider-space-x/src-app-provider-space-x';
import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { ConstantProvider } from '../../providers/constant/constant';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{ title: string, imgPath: string, component: any }>;
  nextLaunch: Launch;

  public isLoaded: boolean = false;
  private spinner: Loading;
  public days;
  public hours;
  public minutes;
  public seconds;
  public maxTime: any;
  public intervalID: any;
  constructor(public navCtrl: NavController, private constant: ConstantProvider, private provider: SrcAppProviderSpaceXProvider, private loader: LoadingController) {
    this.spinner = this.loader.create({
      content: "Please wait..."
    })
    this.pages = this.constant.pages().slice(1, this.constant.pages().length);
    this.provider.getNextLaunch().subscribe((data) => {
      this.nextLaunch = data;
      this.isLoaded = true;
      this.spinner.dismiss();
      this.maxTime = Date.parse(this.nextLaunch.launch_date_utc) - Date.now();
      //console.log("Date1", Date.parse(this.nextLaunch.launch_date_utc), this.nextLaunch.launch_date_utc, "now date", Date.now(), "elapsed", this.maxTime);
 
      var seconds = Math.floor(this.maxTime/1000);

      this.seconds = this.maxTime%60;

      var minutes = Math.floor((seconds - this.seconds)/60);

      this.minutes = minutes%60;

      var hours = Math.floor((minutes - this.minutes)/60);

      this.hours = hours%24;

      this.days = Math.floor((hours - this.hours)/24);

      this.StartTimer();
      //this.intervalID = setInterval(function(){this.calculateElapsedTime()}, 5000);
    })
  }

  public StartTimer() {
    this.intervalID = setTimeout(x => {
      if (this.maxTime <= 0) { 
        console.log("timer over")
        return;
      }
      this.maxTime -= 1000;

      var seconds = Math.floor(this.maxTime/1000);

      this.seconds = seconds%60;

      var minutes = Math.floor((seconds - this.seconds)/60);

      this.minutes = minutes%60;

      var hours = Math.floor((minutes - this.minutes)/60);

      this.hours = hours%24;

      this.days = Math.floor((hours - this.hours)/24);
      
      this.StartTimer();
    }, 1000);
  }

  public navigate(page: { title: string, component: any }) {
    this.navCtrl.push(page.component);
  }

  public openNextLauch(){
    this.navCtrl.push(LaunchDetailsPage, this.nextLaunch);
  }
}
