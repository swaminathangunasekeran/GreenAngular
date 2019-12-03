import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes,RouterModule } from '@angular/router';
import { MaterializeModule } from 'ng2-materialize';
import {TranslateModule} from 'ng2-translate';
import {LanguageService} from "../../sharedService/language.service";
import {AuthComponent} from "./auth.component";
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes =[
    { path: 'auth',             component: AuthComponent },
    { path: 'passwordReset',             component: ResetPasswordComponent },
    //{ path: 'user-profile',     component: ProfileComponent },
    //{ path: '',           component: HomeComponent },
    //{ path: 'auth',           component: AuthComponent },
    //{ path: 'newInsight',      canActivate: [CanActivateRouteGuard],component: NewInsightComponent},

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        MaterializeModule,
        TranslateModule.forRoot(),
        RouterModule.forRoot(routes),
        NgbModule
    ],
    declarations: [AuthComponent, ResetPasswordComponent],
    exports:[AuthComponent ],
    providers: [LanguageService],
    entryComponents: []
})
export class AuthModule { }
