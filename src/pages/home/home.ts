import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConstantProvider } from '../../providers/constant/constant';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{title: string, imgPath:string, component: any}>;
  constructor(public navCtrl: NavController, private constant: ConstantProvider) {
      this.pages =this.constant.pages().slice(1,this.constant.pages().length);
  }

  public navigate(page: {title: string, component: any} ){
    this.navCtrl.push(page.component);
  }
}
