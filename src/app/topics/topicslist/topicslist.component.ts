import { Component, OnInit } from '@angular/core';
import {TopicsService} from '../topics.service'
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topicslist',
  templateUrl: './topicslist.component.html',
  styleUrls: ['./topicslist.component.scss']
})
export class TopicslistComponent implements OnInit {
  insights:any;
  constructor(private topicsService:TopicsService,
    private activatedroute: ActivatedRoute,
    private router: Router) { 
    }

  ngOnInit() {
    this.activatedroute.params.subscribe(routeParams => {
      // do something with the query params
      let topic = routeParams.topic;
      if(topic.length > 0){
        this.topicsService.getTopicsList(topic).subscribe((res) => {
          // console.log("EDITORS PICK",res);
          this.insights = res["result"];
    
          // this.translate.get('homeBody.writer').subscribe((respose: string) => {
          //     this.role = respose;
          // });
          // console.log("EDITORS PICK === ",this.insights);
      });
      }
    });


  
    //this.router.navigateByUrl('/home');
  }

}
