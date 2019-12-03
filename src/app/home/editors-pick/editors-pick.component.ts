import { Component, OnInit } from '@angular/core';
import {EditorsPickService} from "../editors-pick.service";
import {Router} from "@angular/router";
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-editors-pick',
  templateUrl: './editors-pick.component.html',
  styleUrls: ['./editors-pick.component.css']
})
export class EditorsPickComponent implements OnInit {
  insights:string;
  role: string;
  constructor(
    private editorsPIck: EditorsPickService,
    private router: Router,
    public translate:TranslateService
  ) { }

  ngOnInit() {
    this.editorsPIck.getHomePage().subscribe((res) => {
        // console.log("EDITORS PICK",res);
        this.insights = res["result"];

        this.translate.get('homeBody.writer').subscribe((respose: string) => {
            this.role = respose;
        });
        // console.log("EDITORS PICK === ",this.insights);
    });
  }

  navToInsight(insightId){
    // console.log("INSIGHT Clicked",insightId);
    this.router.navigateByUrl(`/insight/${insightId}`);
  }

}
