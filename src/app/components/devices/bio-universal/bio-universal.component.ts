import {Component, HostListener, Input, OnInit} from '@angular/core';
import {DevicesService} from "../../../services/devices.service";
import {MatDialog} from "@angular/material/dialog";
import {StaticData} from "../../../static/static-data";
import {DeviceTypesInfoModel} from "../../../models/DeviceTypesInfo.model";
import {Place} from "../../../models/places.model";
import {BioUniversalModel} from "../../../models/bioUniversal.model";
import {DeviceSettingsComponent} from "../../settings/device-settings/device-settings.component";
import {BaseDeviceModel} from "../../../models/base-device.model";


@Component({
  selector: 'app-bio-universal',
  templateUrl: './bio-universal.component.html',
  styleUrls: ['./bio-universal.component.css']
})
export class BioUniversalComponent implements OnInit {

  WAITING_TIME = 5000;

  @Input() device: BioUniversalModel;

  deviceName: string;
  isOnline: boolean;
  currentCo: number;
  currentGvs: number;
  currentUse: number;
  currentPow: number;
  currentTtg: number;



  constructor(
    private service: DevicesService,
    public dialog: MatDialog,
  ) {
    this.deviceName = '';
    this.isOnline = true;
    this.currentCo = 0;
    this.currentGvs = 0;
    this.currentUse = 0;
    this.currentPow = 0;
    this.currentTtg = 0;
    this.device = new class implements BaseDeviceModel {
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
    // this.isWaitingBtn = false;
    // this.previousData = this.device;
    // this.minTemperature = 40;
    // this.maxTemperature = 90;
    // this.arrayOfPlaces = StaticData.Places;
    // this.arrayOfDeviceTypes = StaticData.DeviceTypesInfo;
    //
    // this.onMouseUpBind = this.onMouseUp.bind(this);
    // document.body.addEventListener('mouseup', this.onMouseUpBind, true);
    // this.onMouseDownBind = this.onMouseDown.bind(this);
    // document.body.addEventListener('mousedown', this.onMouseDownBind, true);
  }

  // get isDataPresent() {
  //   if (this.device.data) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  openDialog() {
    const dialogRef = this.dialog.open(DeviceSettingsComponent, {
      minHeight: '100vh',
      minWidth: '100vw',
      id: 'modal',
      hasBackdrop: true,
      data: {device: this.device}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.deviceName = this.device.name;
    this.isOnline = !this.device.isOnline;
    this.currentCo = this.device.data.data.CENTRAL_HEATING_TEMPERATURE
    this.currentGvs = this.device.data.data.CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE
    this.currentUse = 0;
    this.currentPow = this.device.data.data.WORKING_POWER_IN_PERCENT;
    this.currentTtg = 0;

    // if (!this.device.data) {
    //   return;
    // }
    // if (this.device.removeDate) {
    //   this.isRemoved = true;
    //   this.startCountdown(this.device.removeDate);
    // }
    // this.name = this.device['name'];
    //
    // if (this.device['deviceInfoDto']) {
    //
    //   const found = this.arrayOfPlaces.find((item: Place) => item.value === this.device['deviceInfoDto'].houseType);
    //   if (found) {
    //     this.houseType = found.name;
    //   }
    // }
    // for (let i = 0; i < this.arrayOfDeviceTypes.length; i++) {
    //   if (this.device['deviceType']) {
    //     if (this.arrayOfDeviceTypes[i].value === this.device['deviceType']) {
    //       this.deviceType = this.arrayOfDeviceTypes[i].name;
    //       this.deviceTypeToShow = i;
    //     }
    //   }
    // }
    // this.rangeTemperature1 = this.device['data'].data.CENTRAL_HEATING_TEMPERATURE;
    // this.rangeTemperature2 = this.device['data'].data.CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE;
    //
    // this.currentTemperature1 = this.device['data'].data.EXTERNAL_CENTRAL_HEATING_TEMPERATURE;
    // this.currentTemperature2 = this.device['data'].data.EXTERNAL_CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE;
    // this.opticalSensor = this.device['data'].data.OPTICAL_SENSOR_VALUE;
    // this.actualState = this.device['data'].data.ACTUAL_STATE;
    //
    // this.actualStateSwitch = this.device['deviceState'] === 'START';
    //
    // this.workingPower = this.device['data'].data.WORKING_POWER_IN_PERCENT;
    // this.sensorType = this.device['data'].data.SENSOR_TYPE;
    // this.error = this.device['data'].data.ACTUAL_ERROR;
    // this.workPriority = this.device['data'].data.WORK_PRIORITY;
    // this.usedFuel = this.device['data'].data.FUEL_AMOUNT;
    //
    // this.oldRangeTemperature1 = this.currentTemperature1;
    // this.oldRangeTemperature2 = this.currentTemperature2;
  }

  @HostListener('window:touchend')
  onMouseUp() {
    // this.service.blockFullRefresh = false;
    // if (this.oldRangeTemperature1 !== this.currentTemperature1) {
    //   const dto = {
    //     data: {EXTERNAL_CENTRAL_HEATING_TEMPERATURE: this.currentTemperature1},
    //     id: this.device.id
    //   };
    //   this.putChangeData(dto);
    //   this.oldRangeTemperature1 = this.currentTemperature1;
    // } else if (this.oldRangeTemperature2 !== this.currentTemperature2) {
    //   const dto = {
    //     data: {EXTERNAL_CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE: this.currentTemperature2},
    //     id: this.device.id
    //   };
    //   this.putChangeData(dto);
    //   this.oldRangeTemperature2 = this.currentTemperature2;
    // } else if (this.service.needFullRefresh) {
    //   this.service.getDevices();
    // }
  }

  onMouseDown() {
    this.service.blockFullRefresh = true;
  }

}
