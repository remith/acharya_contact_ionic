import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AcharyaService } from '../services/acharya-service';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { AcharyaDetailsPage } from '../pages/acharya-details/acharya-details';
import { ListPage } from '../pages/list/list';
import { List1Page } from '../pages/list1/list1';
import { CountryPage } from '../pages/country/country';
import { FormPage } from '../pages/form/form'
import { IonAlphaScrollModule } from 'ionic2-alpha-scroll';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    AcharyaDetailsPage,
    ListPage,
    List1Page,
    CountryPage,
    FormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonAlphaScrollModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    AcharyaDetailsPage,
    ListPage,
    List1Page,
    CountryPage,
    FormPage
  ],
  providers: [
    StatusBar,
    AcharyaService,
    SplashScreen,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
