import { MydiariesService } from '../my-diaries-service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-webinsights-config',
  templateUrl: './webinsights-config.component.html',
  styleUrls: ['./webinsights-config.component.scss']
})
export class WebinsightsConfigComponent implements OnInit {
  webInsights:any;
  errorMessage:any;
  loading:boolean = false;
  constructor(
      private mydiaries:MydiariesService,
  ) {
  }

  ngOnInit() {

    this.getwebInsights();
  }


  getwebInsights(){
    this.mydiaries.getwebInsights().subscribe(res => {
      if(res["code"] == 1){
        // this.insights = res["result"].insights;
        this.webInsights = res["result"];
      }else{
        this.errorMessage = res["result"];
      }
    })
  }

  toggleStatue(insight,field){
    if(field == "status"){
        insight[field] = insight[field] === 1 ? 3: 1;
    }else{
        insight[field] = !insight[field];
    }

    this.mydiaries.updateWebInsights(insight).subscribe(res => {
      if(res["code"] == 1){
        // this.insights = res["result"].insights;
        //this.webInsights = res["result"];
        this.getwebInsights();
      }else{
        this.errorMessage = res["result"];
      }
    })
  }

}
