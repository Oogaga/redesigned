import {Component, OnInit} from '@angular/core';

import {UsersService} from "../../services/users.service";
import {WeeklySettingsDayComponent} from "../settings/weekly-settings-day/weekly-settings-day.component";
import {MatDialog} from "@angular/material/dialog";
import {IAmComponent} from "../i-am/i-am.component";
import {Platform} from "@angular/cdk/platform";
import {PrimeComponent} from "../prime/prime.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isSafari: boolean;

  constructor(private userService: UsersService,
              private platform: Platform,
              private dialog: MatDialog) {
    this.isSafari = platform.SAFARI
  }

  openIm() {
    const dailyTemperature = this.dialog.open(IAmComponent, {
      minHeight: '100vh',
      minWidth: '100vw',
      id: 'dayOfWeek',
      hasBackdrop: true
    });

    dailyTemperature.afterClosed().subscribe(result => {

      console.log(`Dialog result: ` + result);
    });
  }

  openPrime() {
    const dailyTemperature = this.dialog.open(PrimeComponent, {
      minHeight: '100vh',
      minWidth: '100vw',
      id: 'prime',
      hasBackdrop: true
    });

    dailyTemperature.afterClosed().subscribe(result => {

      console.log(`Dialog result: ` + result);
    });
  }


  logout() {
    this.userService.logout();
  }

  ngOnInit(): void {

  }


}
