import { WeeklySettingDtoModel } from './weeklysettingdto.model';

import { HouseType } from '../../static/enums/houseTypeEnum.model';

export interface UsersDeviceInfoDto {
  boilerAndPower: string;
  burnerAndPower: string;
  devId: string;
  houseType: HouseType;
  square: string;
  weeklySettings: WeeklySettingDtoModel[];
}
