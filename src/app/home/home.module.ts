import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './home.component';

import { MaterializeModule } from 'ng2-materialize';
import {EditorsPickComponent} from './editors-pick/editors-pick.component';
//import {ContributeComponent} from '../contribute/contribute.component';
import {FromNetworkComponent} from './from-network/from-network.component';
import {LocalComponent} from './local/local.component';
import {TopicsComponent} from './topics/topics.component';
import {TranslateModule} from 'ng2-translate';
import {LanguageService} from "../sharedService/language.service";
import { HomeRoutingModule } from './home.routing';
import {SharedModule} from "../shared/shared.module";
import {EditorsPickService} from "./editors-pick.service";
import { DragScrollModule } from 'ngx-drag-scroll';
import { TrendingComponent } from './trending/trending.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SharedModule,
        MaterializeModule,
        TranslateModule.forRoot(),
        HomeRoutingModule,
        DragScrollModule,
    ],
    declarations: [ HomeComponent,
                    EditorsPickComponent,
                    FromNetworkComponent,
                    LocalComponent,
                    TopicsComponent,
                    TrendingComponent,
                    ],
    exports:[ HomeComponent ],
    providers: [LanguageService,EditorsPickService],
    entryComponents: []
})
export class HomeModule { }
