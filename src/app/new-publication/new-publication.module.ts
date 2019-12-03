import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {TranslateModule} from 'ng2-translate';
import {CanActivateRouteGuard} from "../sharedService/can-activate-route-guard";
import {SharedModule} from "../shared/shared.module";
import { RouterModule, Routes } from '@angular/router';
import { NewPublicationComponent } from './new-publication/new-publication.component';

const publicationroute: Routes = [
  { path: 'newPublication', canActivate: [CanActivateRouteGuard],component: NewPublicationComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    TranslateModule.forRoot(),
    SharedModule,
    RouterModule.forRoot(publicationroute, { enableTracing: true }),
  ],
  declarations: [NewPublicationComponent],
  exports: [NewPublicationComponent],
})
export class NewPublicationModule { }
