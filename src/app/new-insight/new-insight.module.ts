import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NewInsightComponent} from './new-insight.component';
import { Routes,RouterModule } from '@angular/router';
import {TranslateModule} from 'ng2-translate';
import { NgxEditorModule } from 'ngx-editor';
import {CanActivateRouteGuard} from "../sharedService/can-activate-route-guard";
import {SharedModule} from "../shared/shared.module";

const newInsight: Routes =[
    //{ path: 'newInsight',             component: NewInsightComponent },
    //{ path: 'user-profile',     component: ProfileComponent },
    //{ path: '',           component: HomeComponent },
    //{ path: 'auth',           component: AuthComponent },
    { path: 'newInsight',      canActivate: [CanActivateRouteGuard],component: NewInsightComponent},

];


@NgModule({
  declarations :[
    NewInsightComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MaterializeModule,
    NgbModule,
    NgxEditorModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(newInsight, { enableTracing: true }),
  ],
  exports:[ NewInsightComponent ],
})
export class NewInsightModule {

 }
