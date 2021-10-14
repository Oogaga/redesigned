import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {BaseDeviceModel} from "../../models/base-device.model";
import {DevicesService} from "../../services/devices.service";
import {StaticData} from "../../static/static-data";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  refresh_interval: number;
  devices: BaseDeviceModel[];
  intervalTime: number;

  subscription: Subscription;


  constructor(private service: DevicesService) {
    this.devices = [];
    this.refresh_interval = StaticData.REFRESH_INTERVAL;
    this.intervalTime = 0;
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.subscription = this.service.displayingDevices$.subscribe((items: BaseDeviceModel[]) => {
      this.devices = items;
    });
    this.service.getDevices();
    this.intervalTime = window.setInterval(() => {
      this.service.downloadData();
    }, this.refresh_interval);
  }

  ngOnDestroy() {
    clearInterval(this.intervalTime);
    this.subscription.unsubscribe();
  }

}
