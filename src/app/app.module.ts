import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RocketPage } from '../pages/rocket/rocket';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SrcAppProviderSpaceXProvider } from '../providers/src-app-provider-space-x/src-app-provider-space-x';
import { HttpClientModule } from '@angular/common/http';
import { ConstantProvider } from '../providers/constant/constant'; 
import { LaunchPage } from '../pages/launch/launch';
import { LaunchPadPage } from '../pages/launch-pad/launch-pad';
import { CompanyPage } from '../pages/company/company';
import { RocketDetailsPage } from '../pages/rocket-details/rocket-details';
import { IonicStorageModule } from '@ionic/storage';
import { ParametersPage } from '../pages/parameters/parameters';
import { ParametersProvider } from '../providers/parameters/parameters';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RocketPage,
    LaunchPage,
    LaunchPadPage,
    CompanyPage,
    RocketDetailsPage,
    ParametersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RocketPage,
    LaunchPage,
    LaunchPadPage,
    CompanyPage,
    RocketDetailsPage,
    ParametersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SrcAppProviderSpaceXProvider,
    ConstantProvider,
    ParametersProvider
  ]
})
export class AppModule {}
