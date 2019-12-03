import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() userDetails: any ;
  @Input() role:string ;
  profilePic: "assets/img/avatar.png";
  constructor() {
    //this.profilePic = this.userDetails.profilePic?this.userDetails.profilePic : "assets/img/avatar.png";
    // console.log(this.userDetails);
    // console.log(this.role);

   }

  ngOnInit() {

    this.profilePic = this.userDetails.profilePic?this.userDetails.profilePic : "assets/img/avatar.png";

  }

}
