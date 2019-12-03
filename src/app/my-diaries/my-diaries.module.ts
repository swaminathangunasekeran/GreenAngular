import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule} from 'ng2-translate';
import { Routes,RouterModule } from '@angular/router';
import { MyDairiesComponent } from './my-diaries.component';
import {CanActivateRouteGuard} from "../sharedService/can-activate-route-guard";
import {SharedModule} from "../shared/shared.module";
import { MydiariesService } from './my-diaries-service';
import { WebinsightsConfigComponent } from './webinsights-config/webinsights-config.component';
import { InsightDetailsComponent } from './insight-details/insight-details.component';


const myInsights: Routes =[
    //{ path: 'newInsight',             component: NewInsightComponent },
    //{ path: 'user-profile',     component: ProfileComponent },
    //{ path: '',           component: HomeComponent },
    //{ path: 'auth',           component: AuthComponent },
    { path: 'myDiaries',      canActivate: [CanActivateRouteGuard],component: MyDairiesComponent},

];



@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    TranslateModule.forRoot(),
    SharedModule,
    RouterModule.forRoot(myInsights, { enableTracing: true }),
  ],
  declarations: [MyDairiesComponent, WebinsightsConfigComponent, InsightDetailsComponent],
  exports: [MyDairiesComponent],
  providers:[MydiariesService]
})
export class MyDiariesModule { }
