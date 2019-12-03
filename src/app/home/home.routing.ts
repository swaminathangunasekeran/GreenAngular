import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { MaterializeModule } from 'ng2-materialize';

//import { ProfileComponent } from './profile/profile.component';
//import { AuthComponent } from './shared/auth/auth.component';
//import { NewInsightComponent } from './new-insight/new-insight.component';
//import { CanActivateRouteGuard } from './sharedService/can-activate-route-guard';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    //{ path: 'user-profile',     component: ProfileComponent },
    //{ path: '',           component: HomeComponent },
    //{ path: 'auth',           component: AuthComponent },
    //{ path: 'newInsight',      canActivate: [CanActivateRouteGuard],component: NewInsightComponent},

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  exports: [
  ],
})
export class HomeRoutingModule { }
