import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchPadPage } from './launch-pad';

@NgModule({
  declarations: [
    LaunchPadPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchPadPage),
  ],
})
export class LaunchPadPageModule {}
