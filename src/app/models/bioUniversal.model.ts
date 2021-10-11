import {BaseDeviceModel} from './base-device.model';
import {BioUniversalDataModel} from './bioUniversalData.model';

export interface BioUniversalModel extends BaseDeviceModel {
  data: BioUniversalDataModel;
}
