import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEditorModule } from 'ngx-editor';
import { FacebookModule } from 'ngx-facebook';
import {AppRoutingModule} from './app.routing';
import { AppComponent } from './app.component';


import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { MaterializeModule } from 'ng2-materialize';

import { HomeModule } from './home/home.module';
import { TopicsModule } from './topics/topics.module';
import { AuthModule } from './shared/auth/auth.module';
import { MyDiariesModule } from './my-diaries/my-diaries.module';
import { InsightsModule } from './insights/insights.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { EditInsightModule } from './edit-insight/edit-insight.module';

import {SharedModule} from "./shared/shared.module";

import {GlobalShareService} from './sharedService/app.globalshare.service';
//import {UserRegistrationService} from "./sharedService/aws/user-registration.service";
//import {UserParametersService} from "./sharedService/aws/user-parameters.service";

//import {UserRegistrationService} from "./sharedService/aws/user-registration.service";
//import {UserParametersService} from "./sharedService/aws/user-parameters.service";

import {LanguageService} from "./sharedService/language.service";
import { CanActivateRouteGuard } from './sharedService/can-activate-route-guard';
import { ReqInterceptorService } from './sharedService/req.interceptor.service';


import localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';
import {TranslateModule} from 'ng2-translate';
import { NewInsightModule } from './new-insight/new-insight.module';
import { NewPublicationModule } from './new-publication/new-publication.module';

import { Globals } from './shared/global';
import { Config } from './config.service';
import { NewInsightService } from './new-insight/new-insight.service';
import {AuthService} from "./shared/auth/auth.service";

import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    SharedModule,
    HomeModule,
    TopicsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    MaterializeModule,
    NgxEditorModule,
    HttpClientModule,
    FacebookModule.forRoot(),
    NewInsightModule,
    EditInsightModule,
    MyDiariesModule,
    NewPublicationModule,
    UserProfileModule,
    InsightsModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    GlobalShareService,
    LanguageService,
    Globals,
    Config,
    CanActivateRouteGuard,
    NewInsightService,

    AuthService,
    CookieService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ReqInterceptorService,
        multi: true
      }],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
