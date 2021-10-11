import {TypeConfig1} from './Type-config-1.model';

export interface DeviceTypesInfoModel {
  name: string;
  value: string;
  endpoint: string | null;
  parameters: string[] | null;
  historyConfig: TypeConfig1[] | null;
}
