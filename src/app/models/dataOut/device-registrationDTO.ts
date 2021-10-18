import {WeeklySettingDtoModel} from './weeklysettingdto.model';

export interface DeviceRegistrationDTO {
  boilerAndPower: string;
  burnerAndPower: string;
  deviceId: string;
  houseType: string;
  name: string;
  square: string;
  weeklySettings: WeeklySettingDtoModel[];
}
