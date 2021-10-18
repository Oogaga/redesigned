import {Component} from '@angular/core';
import {BaseDeviceModel} from "../../models/base-device.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegExpData} from "../../static/reqexp_data";
import {DevicesService} from "../../services/devices.service";
import {DeviceRegistrationDTO} from "../../models/dataOut/device-registrationDTO"
import {WeeklySettingDtoModel} from "../../models/dataOut/weeklysettingdto.model";
import {MatStepper} from "@angular/material/stepper";


@Component({
  selector: 'app-adding-device',
  templateUrl: './adding-device.component.html',
  styleUrls: ['./adding-device.component.css']
})
export class AddingDeviceComponent {

  // newDevice = new FormGroup({
  //   deviceId: new FormControl(null, [
  //     Validators.required,
  //     Validators.pattern(RegExpData.DEVICE_ID)])
  // });
  device_id = new FormControl(null, [
    Validators.required,
    Validators.pattern(RegExpData.DEVICE_ID)])

  deviceName = new FormGroup({
    name: new FormControl(null, Validators.required)
  });
  isBadRequestResult: boolean;
  deviceRegistrationDto: DeviceRegistrationDTO;

  constructor(private service: DevicesService) {
    this.isBadRequestResult = false;

    this.deviceRegistrationDto = new class implements DeviceRegistrationDTO {
      boilerAndPower = 'BOILER, 400';
      burnerAndPower = 'BURNER, 165';
      deviceId = '';
      houseType = 'HOUSE';
      name = '';
      square = '300';
      weeklySettings: any;
    }
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  checkIsDeviceWait(stepper: MatStepper) {

    if (!this.device_id.valid) {
      return;
    }
    this.isBadRequestResult = false;
    this.service.getIsDeviceReadyStatus(this.device_id.value.deviceId).subscribe((result) => {
        this.goForward(stepper);
      }
      , (error2) => {
        this.isBadRequestResult = true;
      });
  }

  createDto() {
    this.deviceName.updateValueAndValidity();
    if (!this.deviceName.valid) {
      return;
    }
    this.deviceRegistrationDto.deviceId = this.device_id.value.deviceId;
    this.deviceRegistrationDto.name = this.deviceName.value.name;
  }

  registrationNewDevice() {
    this.service.addDevice(this.deviceRegistrationDto).subscribe((data: any) => {
      this.service.getDevices();
    }, (error: Error) => {
      console.log(error);
    });
  }


}
