import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CustCreateNewAccPage } from '../pages/cust-create-new-acc/cust-create-new-acc';
import { LoginPage } from '../pages/login/login';
import { ViewProfilePage } from '../pages/view-profile/view-profile';
import { CreateNewBookingPage } from '../pages/create-new-booking/create-new-booking';
import { ViewBookingPage } from '../pages/view-booking/view-booking';
import { ViewActiveBookingReqPage } from '../pages/view-active-booking-req/view-active-booking-req';
import { ProCreateNewAccPage } from '../pages/pro-create-new-acc/pro-create-new-acc';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CustCreateNewAccPage,
    LoginPage,
    ViewProfilePage,
    CreateNewBookingPage,
    ViewBookingPage,
    ViewActiveBookingReqPage,
    ProCreateNewAccPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CustCreateNewAccPage,
    LoginPage,
    ViewProfilePage,
    CreateNewBookingPage,
    ViewBookingPage,
    ViewActiveBookingReqPage,
    ProCreateNewAccPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
