import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from 'ng2-translate';
import {SharedModule} from "../shared/shared.module";
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterializeModule } from 'ng2-materialize';
import { TopicsComponent } from './topics/topics.component';
import { TopicsService } from './topics.service';
import { TopicslistComponent } from './topicslist/topicslist.component';


const routes: Routes =[
  { path: 'topic/:topic',             component: TopicsComponent },
  //{ path: 'user-profile',     component: ProfileComponent },
  //{ path: '',           component: HomeComponent },
  //{ path: 'auth',           component: AuthComponent },
  //{ path: 'newInsight',      canActivate: [CanActivateRouteGuard],component: NewInsightComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
    BrowserModule,
    NgbModule,
    CommonModule,
    TranslateModule.forRoot(),
    SharedModule,
  ],
  declarations: [TopicsComponent, TopicslistComponent],
  providers:[TopicsService]
})
export class TopicsModule { }
