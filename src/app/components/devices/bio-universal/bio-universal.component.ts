import {Component, HostListener, Input, OnInit} from '@angular/core';
import {DevicesService} from "../../../services/devices.service";
import {MatDialog} from "@angular/material/dialog";
import {StaticData} from "../../../static/static-data";
import {DeviceTypesInfoModel} from "../../../models/DeviceTypesInfo.model";
import {Place} from "../../../models/places.model";
import {BioUniversalModel} from "../../../models/bioUniversal.model";
import {DeviceSettingsComponent} from "../../settings/device-settings/device-settings.component";
import {BaseDeviceModel} from "../../../models/base-device.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {interval, Observable} from "rxjs";
import {RegExpData} from "../../../static/reqexp_data";
import {Permission} from "../../../static/enums/permissionEnum.model";

@Component({
  selector: 'app-bio-universal',
  templateUrl: './bio-universal.component.html',
  styleUrls: ['./bio-universal.component.css']
})
export class BioUniversalComponent implements OnInit {

  WAITING_TIME = 5000;

  @Input() device: BioUniversalModel;

  deviceNumber: number;
  deviceName: string;
  isOnline: boolean;
  currentCo: number;
  currentGvs: number;
  currentUse: number;
  currentPow: number;
  currentTtg: number;
  actualState: number;
  workPriority: number;

  changeCo: number;
  changeGvs: number;
  oldValueCo: number;
  oldValueGvs: number;
  interval: any;


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
    this.actualState = 0;
    this.workPriority = 0;

    this.deviceNumber = 0;

    this.changeCo = 0;
    this.changeGvs = 0;
    this.oldValueCo = 0;
    this.oldValueGvs = 0;

    this.device = new class implements BaseDeviceModel {
      autoWeekly: any;
      country: any;
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


  inputControlCo = new FormControl(null, [
    Validators.required,
    Validators.max(90),
    Validators.min(40)
  ]);

  inputControlGvs = new FormControl(null, [
    Validators.required,
    Validators.max(90),
    Validators.min(40)
  ]);

  growCo() {
    if (this.changeCo < 90) {
      if (this.changeCo < 40) {
        this.changeCo = 39;
      }
      this.changeCo++;

    }
  }

  reduceCo() {
    if (this.changeCo > 40 || !this.changeCo) {
      if (this.changeCo > 90 || !this.changeCo) {
        this.changeCo = 91;
      }
      this.changeCo--;
    }
  }

  growGvs() {
    if (this.changeGvs < 90) {
      if (this.changeGvs < 40) {
        this.changeGvs = 39;
      }
      this.changeGvs++;
    }
  }

  reduceGvs() {
    if (this.changeGvs > 40 || !this.changeGvs) {
      if (this.changeGvs > 90 || !this.changeGvs) {
        this.changeGvs = 91;
      }
      this.changeGvs--;
    }
  }


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
    let devices = JSON.parse(localStorage.getItem('devices') || 'null');
    for (let i = 0; i < devices.length; i++) {
      if (devices[i].id == this.device.id) {
        this.deviceNumber = i;
      }
    }
    this.deviceName = this.device.name;
    this.isOnline = !this.device.isOnline;
    this.currentCo = this.device.data.data.CENTRAL_HEATING_TEMPERATURE;
    this.currentGvs = this.device.data.data.CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE;
    this.currentUse = this.device.data.data.FUEL_AMOUNT;
    this.currentPow = this.device.data.data.WORKING_POWER_IN_PERCENT;
    this.currentTtg = this.device.data.data.OPTICAL_SENSOR_VALUE;
    this.actualState = this.device.data.data.ACTUAL_STATE;
    this.workPriority = this.device.data.data.WORK_PRIORITY;


    this.changeCo = this.device.data.data.EXTERNAL_CENTRAL_HEATING_TEMPERATURE;
    this.changeGvs = this.device.data.data.EXTERNAL_CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE;
    this.oldValueCo = this.changeCo;
    this.oldValueGvs = this.changeGvs;

    this.interval = setInterval(() => {
      let device = JSON.parse(localStorage.getItem('devices') || 'null')[this.deviceNumber];
      this.isOnline = !device.isOnline;
      this.currentCo = device.data.data.CENTRAL_HEATING_TEMPERATURE;
      this.currentGvs = device.data.data.CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE;
      this.currentUse = device.data.data.FUEL_AMOUNT;
      this.currentPow = device.data.data.WORKING_POWER_IN_PERCENT;
      this.currentTtg = device.data.data.OPTICAL_SENSOR_VALUE;
      this.actualState = device.data.data.ACTUAL_STATE;
      this.workPriority = device.data.data.WORK_PRIORITY;


      if ((this.oldValueCo !== this.changeCo)&&this.inputControlCo.valid) {
        const dto = {
          data: {EXTERNAL_CENTRAL_HEATING_TEMPERATURE: this.changeCo},
          id: this.device.id
        };
        this.putChangeData(dto);
        this.oldValueCo = this.changeCo;
      } else if ((this.oldValueGvs !== this.changeGvs)&&this.inputControlGvs.valid) {
        const dto = {
          data: {EXTERNAL_CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE: this.changeGvs},
          id: this.device.id
        };
        this.putChangeData(dto);
        this.oldValueGvs = this.changeGvs;
      }
    }, 1000)


  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval)
  }

  putChangeData(data: any) {
    if (this.device.isOnline && this.device.permission === Permission.WRITE) {
      console.log('Changed data:' + JSON.stringify(data))
      this.service.changeDeviceState(
        data,
        this.device.id,
        () => {
        },
        (error: Error) => console.log(error),
        'type1');
    }
  }


}
