import { Component, OnInit } from '@angular/core';
import {StaticData} from '../../../static/static-data';


@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {
  biopromUrl: string;


  constructor(  ) {
    this.biopromUrl = StaticData.BIOPROM_LINK;
  }

  ngOnInit(): void {
  }

}
