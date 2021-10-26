export class WeeklySettingDtoModel {
  public on: boolean;
  public settings: SettingItem[];

  constructor(on: boolean, settings: SettingItem[]) {
    this.on = on;
    this.settings = settings
  }
}

export class SettingItem {
  public dayOfWeek: number;
  public devId?: string;
  public enabled: boolean;
  public hourOfDay: number;
  public id?: number;
  public targetTemperature: number;

  constructor(dayOfWeek: number, devId: string, enabled: boolean, hourOfDay: number, id: number, targetTemperature: number) {
    this.dayOfWeek = dayOfWeek;
    this.devId = devId;
    this.enabled = enabled;
    this.hourOfDay = hourOfDay;
    this.id = id;
    this.targetTemperature = targetTemperature;
  }
}
