import {Component, OnInit} from '@angular/core';

import {UsersService} from "../../services/users.service";
import {WeeklySettingsDayComponent} from "../settings/weekly-settings-day/weekly-settings-day.component";
import {MatDialog} from "@angular/material/dialog";
import {IAmComponent} from "../i-am/i-am.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private userService: UsersService,
              private dialog: MatDialog) {
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


  logout() {
    this.userService.logout();
  }

  ngOnInit(): void {

  }


}
