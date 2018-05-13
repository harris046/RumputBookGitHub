import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CustCreateNewAccPage } from '../pages/cust-create-new-acc/cust-create-new-acc';
import { LoginPage } from '../pages/login/login';
import { ViewProfilePage } from '../pages/view-profile/view-profile';
import { CreateNewBookingPage } from '../pages/create-new-booking/create-new-booking';
import { ViewBookingPage } from '../pages/view-booking/view-booking';
import { ViewActiveBookingReqPage } from '../pages/view-active-booking-req/view-active-booking-req';
import { ProCreateNewAccPage } from '../pages/pro-create-new-acc/pro-create-new-acc';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Cust reg', component: CustCreateNewAccPage },
      { title: 'Login', component: LoginPage },
      { title: 'Profile', component: ViewProfilePage },
      { title: 'Create New Booking', component: CreateNewBookingPage},
      { title: 'View Booking', component: ViewBookingPage },
      { title: 'View Active Booking Request', component: ViewActiveBookingReqPage},
      {title: 'Pro reg', component: ProCreateNewAccPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
