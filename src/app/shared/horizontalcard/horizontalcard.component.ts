import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-horizontalcard',
  templateUrl: './horizontalcard.component.html',
  styleUrls: ['./horizontalcard.component.scss']
})
export class HorizontalcardComponent implements OnInit {
  @Input() insightDetails: any ;
  constructor() { }

  ngOnInit() {
    // console.log("Insight Details",this.insightDetails);
  }

}
