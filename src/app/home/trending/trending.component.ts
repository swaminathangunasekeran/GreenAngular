import { Component, OnInit } from '@angular/core';
import {EditorsPickService} from "../editors-pick.service";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  insights:any;
  constructor(private editorsPIck: EditorsPickService) { }

  ngOnInit() {
    this.editorsPIck.getTrending().subscribe((res) => {
      // console.log("EDITORS PICK",res);
      this.insights = res["result"];

      // this.translate.get('homeBody.writer').subscribe((respose: string) => {
      //     this.role = respose;
      // });
      // console.log("EDITORS PICK === ",this.insights);
  });
  }


  

}
