import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustCreateNewAccPage } from './cust-create-new-acc';

@NgModule({
  declarations: [
    CustCreateNewAccPage,
  ],
  imports: [
    IonicPageModule.forChild(CustCreateNewAccPage),
  ],
})
export class CustCreateNewAccPageModule {}
