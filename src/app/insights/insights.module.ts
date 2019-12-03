import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule} from 'ng2-translate';
import { Routes,RouterModule } from '@angular/router';
import {SharedModule} from "../shared/shared.module";
import { InsightComponent } from './insight/insight.component';
import { InsightService } from './insight.service';

const myInsights: Routes =[
    //{ path: 'newInsight',             component: NewInsightComponent },
    //{ path: 'user-profile',     component: ProfileComponent },
    //{ path: '',           component: HomeComponent },
    //{ path: 'auth',           component: AuthComponent },
    { path: 'insight/:id',      component: InsightComponent},

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
  declarations: [InsightComponent],
  providers:[InsightService]
})
export class InsightsModule { }
