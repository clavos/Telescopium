import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParametersPopoverPage } from './parameters-popover';

@NgModule({
  declarations: [
    ParametersPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ParametersPopoverPage),
  ],
})
export class ParametersPopoverPageModule {}
