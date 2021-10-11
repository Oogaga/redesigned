import { Role } from '../role.model';
import { Socialdatadto } from '../users-socialdatadto.model';

import { SocialProvider } from '../social-provider-enum.model';
import { BaseDeviceModel } from '../base-device.model';

export interface UsersDataOut {
  birthday: string;
  deviceDtos: BaseDeviceModel[];
  email: string;
  firmwareStatus: boolean;
  firstName: string;
  id: number;
  isOnline: string;
  isOwner: boolean;
  lastName: string;
  lastOnline: string;
  locale: string;
  newMsgCount: number;
  permissions: {};
  phone: string;
  role: Role;
  socialDataDtos: Socialdatadto[];
  socialProvider: SocialProvider;
}
