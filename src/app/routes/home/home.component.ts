import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  imInterval: any

  constructor(private im: UsersService) {

  }

  ngOnInit(){

    this.imInterval = setInterval(()=>{this.im.getMyProfileInfo()}, 1000);

  }

  ngOnDestroy() {
    clearInterval(this.imInterval);
  }


}
