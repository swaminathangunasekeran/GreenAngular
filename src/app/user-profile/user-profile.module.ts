import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule} from 'ng2-translate';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Routes,RouterModule } from '@angular/router';
import {SharedModule} from "../shared/shared.module";
import {UserProfileService} from "./user-profile.service";

const userProfile: Routes =[
    //{ path: 'newInsight',             component: NewInsightComponent },
    //{ path: 'user-profile',     component: ProfileComponent },
    //{ path: '',           component: HomeComponent },
    //{ path: 'auth',           component: AuthComponent },
    { path: 'user-profile/:id',     component: UserProfileComponent},

];


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    TranslateModule.forRoot(),
    SharedModule,
    RouterModule.forRoot(userProfile, { enableTracing: true }),
  ],
  declarations: [UserProfileComponent],
  providers:[UserProfileService]
})
export class UserProfileModule { }
