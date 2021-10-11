export interface WeeklySettingDtoModel {
  on: boolean;
  settings: SettingItem[];
}

export interface SettingItem {
  dayOfWeek: number;
  devId?: string;
  enabled: boolean;
  hourOfDay: number;
  id?: number;
  targetTemperature: number;
}
