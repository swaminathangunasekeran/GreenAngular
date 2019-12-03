import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
//import { AuthComponent } from './shared/auth/auth.component';
//import { NewInsightComponent } from './new-insight/new-insight.component';
//import { CanActivateRouteGuard } from './sharedService/can-activate-route-guard';

const routes: Routes =[
    // { path: '**',             component: HomeComponent },
   // { path: 'user-profile',     component: ProfileComponent },
   { path: '**',             component: HomeComponent }
    //{ path: '',           component: HomeComponent },
    //{ path: 'auth',           component: AuthComponent },
    //{ path: 'newInsight',      canActivate: [CanActivateRouteGuard],component: NewInsightComponent},

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
