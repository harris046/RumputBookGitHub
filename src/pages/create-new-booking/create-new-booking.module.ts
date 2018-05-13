import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewBookingPage } from './create-new-booking';

@NgModule({
  declarations: [
    CreateNewBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewBookingPage),
  ],
})
export class CreateNewBookingPageModule {}
