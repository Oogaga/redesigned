import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddingDeviceComponent} from "../../adding-device/adding-device.component";
import {Platform} from "@angular/cdk/platform";

@Component({
  selector: 'app-add-new-device',
  templateUrl: './add-new-device.component.html',
  styleUrls: ['./add-new-device.component.css']
})
export class AddNewDeviceComponent implements OnInit {

  isSafari: boolean

  constructor(public dialog: MatDialog,
              private platform: Platform) {
    this.isSafari = platform.SAFARI;
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddingDeviceComponent, {
      minHeight: '100vh',
      minWidth: '100vw',
      id: 'modal',
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
