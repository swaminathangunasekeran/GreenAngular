import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'ng2-materialize';
import { HeaderOneComponent } from './header-one/header-one.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import {FooterComponent} from "./footer/footer.component";
import {TranslateModule} from 'ng2-translate';
import { RouterModule, Routes } from '@angular/router';
import { PublishModelComponent } from './publish-model/publish-model.component';
import {PublishService} from  "./publish-model/publish.service";
import { UserComponent } from './user/user.component';
import { HorizontalcardComponent } from './horizontalcard/horizontalcard.component';
import { SidecardsComponent } from './sidecards/sidecards.component';
import { ThudupcardComponent } from './thudupcard/thudupcard.component';
import { UserHighLightComponent } from './user-high-light/user-high-light.component';
import { EditorImageDirective } from './directive/editor-image.directive';
import { ImageButtonDirective } from './directive/image-button.directive';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { MediumEditorDirective } from 'angular2-medium-editor';
import { EditInsightDirective } from './directive/edit-insight.directive';
import { ThudupVcardComponent } from './thudup-vcard/thudup-vcard.component';
import { ThudpVcardServiceService } from './thudup-vcard/thudp-vcard-service.service';
import { CommentModalComponent } from './comment-modal/comment-modal.component';
import {CommentModalService} from './comment-modal/comment-modal.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot(),
    RouterModule,
    MaterializeModule
  ],
  declarations: [
    HeaderOneComponent,
    FooterComponent,
    NavbarComponent,
    SideNavComponent,
    SocialLoginComponent, 
    PublishModelComponent, 
    UserComponent,
    HorizontalcardComponent, 
    SidecardsComponent, 
    ThudupcardComponent, 
    UserHighLightComponent,
    EditorImageDirective,
    ImageButtonDirective,
    ImageGalleryComponent,
    MediumEditorDirective,
    EditInsightDirective,
    ThudupVcardComponent,
    CommentModalComponent
  ],
  exports : [
    HeaderOneComponent,
    FooterComponent,
    NavbarComponent,
    SideNavComponent,
    SocialLoginComponent,
    PublishModelComponent,
    UserComponent, 
    HorizontalcardComponent,
    SidecardsComponent,
    ThudupcardComponent,
    UserHighLightComponent,
    EditorImageDirective,
    ImageButtonDirective,
    ImageGalleryComponent,
    MediumEditorDirective,
    ThudupVcardComponent,
    CommentModalComponent
  ],
  entryComponents: [CommentModalComponent,SocialLoginComponent,PublishModelComponent],
  providers:[PublishService,ThudpVcardServiceService,CommentModalService]
})
export class SharedModule { }
