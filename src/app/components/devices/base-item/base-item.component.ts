import {Component, Input, OnInit} from '@angular/core';
import {BaseDeviceModel} from "../../../models/base-device.model";
import {DeviceTypesInfoModel} from "../../../models/DeviceTypesInfo.model";
import {StaticData} from "../../../static/static-data";

@Component({
  selector: 'app-base-item',
  templateUrl: './base-item.component.html',
  styleUrls: ['./base-item.component.css']
})
export class BaseItemComponent implements OnInit {

  private _device: BaseDeviceModel;
  deviceTypeToShow: number;
  arrayOfDeviceTypes: DeviceTypesInfoModel[];

  constructor() {
    this.deviceTypeToShow = 10;
      this.arrayOfDeviceTypes = StaticData.DeviceTypesInfo;
      this._device = new class implements BaseDeviceModel {
        autoWeekly: any;
        country :any;
        data: any;
        dataChangedByUser: any;
        devId: any;
        devKey: any;
        deviceInfoDto: any;
        deviceState: any;
        deviceType: any;
        errorCode: any;
        firmware: any;
        id: any;
        ip: any;
        isOnline: any;
        latitude: any;
        longitude: any;
        name: any;
        onlineTimeSec: any;
        owner: any;
        permission: any;
        recoverCountDate: any;
        remove: any;
        removeDate: any;
        timezone: any;
      };
  }

  @Input()
  get device() {
    return this._device;
  }

  set device(value) {
    if (this._device === value) {
      return;
    }
    this._device = value;
    if (!this._device || !this._device.data) {
      return;
    }
    const data = this._device.data.data;
    for (const key in data) {
      if (Number(data[key])) {
        data[key] = Math.round(data[key]);
      }
    }
  }



  ngOnInit() {
    // if (!this._device || !this._device.data) {
    //   return;
    // }
    for (let i = 0; i < this.arrayOfDeviceTypes.length; i++) {
      if (this.arrayOfDeviceTypes[i].value === this.device.deviceType) {
        this.deviceTypeToShow = i;
      }
    }
  }

}
