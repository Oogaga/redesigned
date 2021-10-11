import { DeviceState } from '../static/enums/deviceStateEnum.model';
import { DeviceType } from '../static/enums/deviceTypeEnum.model';
import { Permission } from '../static/enums/permissionEnum.model';
import { UsersDeviceInfoDto } from '../models/dataOut/users-deviceinfodto.model';

export interface BaseDeviceModel {
  autoWeekly: boolean;
  country: string;
  data: any;
  dataChangedByUser: {};
  devId: string;
  devKey: string;
  deviceInfoDto: UsersDeviceInfoDto;
  deviceState: DeviceState;
  deviceType: DeviceType;
  errorCode: number;
  firmware: string;
  id: number;
  ip: string;
  isOnline: boolean;
  latitude: string;
  longitude: string;
  name: string;
  onlineTimeSec: number;
  owner: boolean;
  permission: Permission;
  recoverCountDate: number;
  remove: boolean;
  removeDate: string;
  timezone: number;
}
