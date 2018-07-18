import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchesFiltersPopoverPage } from './launches-filters-popover';

@NgModule({
  declarations: [
    LaunchesFiltersPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchesFiltersPopoverPage),
  ],
})
export class LaunchesFiltersPopoverPageModule {}
