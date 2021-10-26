import {Component, Inject, OnInit} from '@angular/core';
import {Options} from '@angular-slider/ngx-slider';
import {BaseDeviceModel} from "../../../models/base-device.model";
import {TimeZone} from "../../../models/timezones.model";
import {DevicesService} from "../../../services/devices.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {StaticData} from "../../../static/static-data";
import * as moment from "moment";
import {ThemePalette} from "@angular/material/core";
import {Permission} from "../../../static/enums/permissionEnum.model";
import {switchMap} from "rxjs/operators";
import {WeeklySettingsDayComponent} from "../weekly-settings-day/weekly-settings-day.component";
import {WeeklySettingDtoModel} from "../../../models/dataOut/weeklysettingdto.model";
import {SettingItem} from "../../../models/dataOut/weeklysettingdto.model";

@Component({
  selector: 'app-device-settings',
  templateUrl: './device-settings.component.html',
  styleUrls: ['./device-settings.component.css']
})
export class DeviceSettingsComponent implements OnInit {

  ONE_SECOND_FOR_COUNTER = 1000;
  VALUE_FOR_CHANGE_DEVICE_DATA = 1000;

  device: BaseDeviceModel;
  arrayOfTimeZone: TimeZone[];
  timezone: number;
  workPriority;
  range: number[];
  range21: number[];
  range1: number;
  range2: number;
  range3: number;
  range22: number;
  // _____________________________Шнеки
  range4: number;
  range5: number;
  range6: number;
  range7: number;
  range8: number;
//____________________________________Настройка вентиляторов
  range9: number[];
  range10: number;
  range11: number;
  range12: number[];
  //_________________________________________
  range13: number;
  range14: number;
  augerWorkMode: boolean;
  cleaningWork: boolean;
  cleaningSettingsFun: boolean;
  range15: number;
  range16: number[];
  range17: any;
  range18: number;
  range19: number;
  range20: number;
  deviceId: string;
  deviceName: string;
  deviceIp: string;
  weeklySettingsCheckBox: boolean;
  isRemoved: boolean;
  removeDate: moment.Duration;
  intervalObj: any;
  day;
  hours;
  minutes;
  seconds;
  weather: any;
  count: number;
  week: any[];
  weeklyCheckbox: boolean[];
  selectedDayIndex: number;
  notPresentData = false;
  notPresentData21 = false;
  notPresentData1 = false;
  notPresentData2 = false;
  notPresentData3 = false;
  notPresentData22 = false;
  notPresentData4 = false;
  notPresentData5 = false;
  notPresentData7 = false;
  notPresentData8 = false;
  notPresentData6 = false;
  notPresentData9 = false;
  notPresentData10 = false;
  notPresentData11 = false;
  notPresentData12 = false;
  notPresentData14 = false;
  notPresentData13 = false;
  notPresentData15 = false;
  notPresentData16 = false;
  notPresentData17 = false;
  notPresentData18 = false;
  notPresentData19 = false;
  notPresentData20 = false;
  notPresentData23 = false;
  notPresentData24 = false;
  notPresentData25 = false;
  notPresentData26 = false;
  color: ThemePalette = 'primary';
  warn: ThemePalette = 'warn';
  indeterminate: boolean = true;
  accept: boolean;
  rippleColor = 'rgba(63,81,181,0.2)';

  constructor(
    private service: DevicesService,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.arrayOfTimeZone = StaticData.TimeZones;
    this.count = 1;
    this.device = data['device'];
    this.selectedDayIndex = 0;
    this.timezone = 0;
    this.removeDate = moment.duration();
    this.day = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.week = [];
    this.workPriority = 0;
    this.augerWorkMode = false;
    this.cleaningWork = false;
    this.cleaningSettingsFun = false;
    this.deviceId = '';
    this.deviceIp = '';
    this.deviceName = '';
    this.weeklySettingsCheckBox = false;
    this.isRemoved = false;
    this.range = [];
    this.range1 = 0;
    this.range2 = 0;
    this.range3 = 0;
    this.range4 = 0;
    this.range5 = 0;
    this.range6 = 0;
    this.range7 = 0;
    this.range8 = 0;
    this.range9 = [];
    this.range10 = 0;
    this.range11 = 0;
    this.range12 = [];
    this.range13 = 0;
    this.range14 = 0;
    this.range15 = 0;
    this.range16 = [];
    this.range17 = 0;
    this.range18 = 0;
    this.range19 = 0;
    this.range20 = 0;
    this.range21 = [];
    this.range22 = 0;
    this.accept = false;
    this.weeklyCheckbox = []
  }



  options_1Pers_100: Options = {
    floor: 1,
    ceil: 100,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + '%'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };
  options_0Pers_100: Options = {
    floor: 0,
    ceil: 100,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + '%'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };
  options_0Sec_100: Options = {
    floor: 0,
    ceil: 100,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + 'сек.'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };
  options_1Temp_20: Options = {
    floor: 1,
    ceil: 20,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + '°С'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };
  options_1Min_20: Options = {
    floor: 1,
    ceil: 20,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + 'мин.'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };
  options_1Sec_250: Options = {
    floor: 1,
    ceil: 250,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + 'сек.'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };
  options_1Sec_100: Options = {
    floor: 1,
    ceil: 100,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + 'сек.'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };
  options_0Sec_120: Options = {
    floor: 0,
    ceil: 120,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + 'сек.'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };
  options_30Temp_80: Options = {
    floor: 30,
    ceil: 80,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + '°С'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };
  options_0Temp_10: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + '°С'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };
  options_5Pers_100: Options = {
    floor: 5,
    ceil: 100,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + '%'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };
  options_0Temp_20: Options = {
    floor: 0,
    ceil: 20,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + '°С'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };
  options_50Sec_1200: Options = {
    floor: 50,
    ceil: 1200,
    showSelectionBar: true,
    translate: (value: number): string => {
      return value + 'сек.'
    },
    draggableRange: true,
    getPointerColor: (value: number): string => {
      return '#F0F6F9'
    }
  };

  changeTemperature(dayNumber: number) {
    const dailyTemperature = this.dialog.open(WeeklySettingsDayComponent, {
      minHeight: '100vh',
      minWidth: '100vw',
      id: 'dayOfWeek',
      hasBackdrop: true,
      data: {data: this.week[dayNumber], day: dayNumber, id: this.device.id}
    });

    console.log(`opened dialog ${dayNumber} with` + JSON.stringify(this.week[dayNumber]))

    dailyTemperature.afterClosed().subscribe(dailyTemperature => {

      console.log(`Dialog result: ` + JSON.stringify(dailyTemperature.value));
    });
  }

  setTimeZone() {
    const temp = StaticData.TimeZones.find((timezone) => timezone.value === this.device.timezone);
    if (temp) {
      this.timezone = temp.value;
    }
  }

  private getWeeklySettings() {
    this.service.getWeeklySettings(this.device.id).subscribe((data1: any) => {
      const settings = data1.settings.map((hourData: any) => {
        const updatedHour = Object.assign({}, hourData);
        updatedHour.hourOfDay += this.device.timezone;
        this.correctDayByDeviceTimezone(updatedHour);
        return updatedHour;
      });


      this.week = StaticData.Week.map((dayName: any, dayIndex: any) => {
        const hoursOfDay = settings ? settings.filter((hour: any) => hour.dayOfWeek === dayIndex) : null;
        hoursOfDay.sort((a: any, b: any) => {
          if (a.hourOfDay > b.hourOfDay) {
            return 1;
          }
          if (a.hourOfDay < b.hourOfDay) {
            return -1;
          } else return
        });
        const enable = Boolean(hoursOfDay) && hoursOfDay.some((hour: any) => hour.enabled);
        let data;
        if (hoursOfDay && hoursOfDay.length > 0) {
          data = hoursOfDay.map((hour: any) => {
            return hour.targetTemperature;
          });
        } else {
          data = new Array(StaticData.HOURS_IN_DAY);
          data.fill(StaticData.DEFAULT_TEMPERATURE);
        }
        return {
          name: dayName,
          enable,
          data
        };
      }
      );
      localStorage.setItem(this.device.id.toString(), JSON.stringify(this.week))
      for (let i = 0; i<7; i++) {
        this.weeklyCheckbox[i] = this.week[i].enable
      }
    });
  }

  private correctDayByDeviceTimezone(hour: any) {
    if (hour.hourOfDay < 0) {
      hour.dayOfWeek = hour.dayOfWeek === 0 ? 6 : hour.dayOfWeek -= 1;
      hour.hourOfDay = StaticData.HOURS_IN_DAY + hour.hourOfDay;
      return;
    }
    if (hour.hourOfDay > 23) {
      hour.dayOfWeek = hour.dayOfWeek === 6 ? 0 : hour.dayOfWeek += 1;
      hour.hourOfDay = hour.hourOfDay - StaticData.HOURS_IN_DAY;
    }
  }

  ngOnInit() {
    this.setTimeZone();
    this.getWeeklySettings();
    this.deviceId = this.device.devId;
    this.deviceName = this.device.name;
    this.deviceIp = this.device.ip;

    // ___________________________________________________________________________________________________________________________________Костыль
    let slider = document.getElementsByClassName('ngx-slider') as HTMLCollectionOf<HTMLElement>
    setTimeout(() => {
      if (slider.length > 0) {
        for (let i = 0; i < slider.length; i++) {
          slider[i].style.width = "101%";
        }
      }
    }, 500);
    setTimeout(() => {
      if (slider.length > 0) {
        for (let i = 0; i < slider.length; i++) {
          slider[i].style.width = "100%";
        }
      }
    }, 1000)
    // ___________________________________________________________________________________________________________________________________Костыль

    if (this.device.data.data.FAN_POWER_DURING_IGNITION != null && this.device.data.data.FAN_POWER_DURING_IGNITION_MAX != null) {
      this.range = [this.device.data.data.FAN_POWER_DURING_IGNITION, this.device.data.data.FAN_POWER_DURING_IGNITION_MAX];
    } else {
      this.range = [0, 1];
      this.notPresentData = true;
    }

    if (this.device['data'].data.EXTERNAL_AUGER_CONVEYOR_WORK_TIME_IGNITION != null) {
      this.range1 = this.device['data'].data.EXTERNAL_AUGER_CONVEYOR_WORK_TIME_IGNITION;
    } else {
      this.range1 = 0;
      this.notPresentData1 = true;
    }
    if (this.device['data'].data.INTERNAL_AUGER_CONVEYOR_WORK_TIME_IGNITION != null) {
      this.range2 = this.device['data'].data.INTERNAL_AUGER_CONVEYOR_WORK_TIME_IGNITION;
    } else {
      this.range2 = 0;
      this.notPresentData2 = true;
    }

    if (this.device['data'].data.OPTICAL_SENSOR_TEMPERATURE_GROWING != null) {
      this.range3 = this.device['data'].data.OPTICAL_SENSOR_TEMPERATURE_GROWING;
    } else {
      this.range3 = 1;
      this.notPresentData3 = true;
    }

    if (this.device['data'].data.WORK_PRIORITY != null) {
      this.workPriority = this.device['data'].data.WORK_PRIORITY;
    } else {
      this.workPriority = 0;
      this.notPresentData24 = true;
    }

    if (this.device['data'].data.INTERNAL_AUGER_CONVEYOR_WORK_TIME != null) {
      this.range4 = this.device['data'].data.INTERNAL_AUGER_CONVEYOR_WORK_TIME / this.VALUE_FOR_CHANGE_DEVICE_DATA;
    } else {
      this.range4 = 1;
      this.notPresentData4 = true;
    }

    if (this.device['data'].data.EXTERNAL_AUGER_CONVEYOR_PAUSE != null) {
      this.range5 = this.device['data'].data.EXTERNAL_AUGER_CONVEYOR_PAUSE / this.VALUE_FOR_CHANGE_DEVICE_DATA;
    } else {
      this.range5 = 1;
      this.notPresentData5 = true;
    }

    if (this.device['data'].data.CLEANING_CYCLES_COUNT != null) {
      this.range6 = this.device['data'].data.CLEANING_CYCLES_COUNT / this.VALUE_FOR_CHANGE_DEVICE_DATA;
    } else {
      this.range6 = 1;
      this.notPresentData6 = true;
    }

    if (this.device['data'].data.EXTERNAL_AUGER_CONVEYOR_WORK_TIME != null) {
      this.range7 = this.device['data'].data.EXTERNAL_AUGER_CONVEYOR_WORK_TIME / this.VALUE_FOR_CHANGE_DEVICE_DATA;
    } else {
      this.range7 = 1;
      this.notPresentData7 = true;
    }

    if (this.device['data'].data.CLEANING_WORK_TIME != null) {
      this.range8 = this.device['data'].data.CLEANING_WORK_TIME / this.VALUE_FOR_CHANGE_DEVICE_DATA;
    } else {
      this.range8 = 1;
      this.notPresentData8 = true;
    }

    if (this.device['data'].data.MIN_FAN_WORKING_POWER != null && this.device['data'].data.MAX_FAN_WORKING_POWER != null) {
      this.range9 = [this.device['data'].data.MIN_FAN_WORKING_POWER, this.device['data'].data.MAX_FAN_WORKING_POWER];
    } else {
      this.range9 = [0, 1];
      this.notPresentData9 = true;
    }

    if (this.device['data'].data.RESERVE_FAN_START_TIMEOUT != null) {
      this.range10 = this.device['data'].data.RESERVE_FAN_START_TIMEOUT;
    } else {
      this.range10 = 1;
      this.notPresentData10 = true;
    }

    if (this.device['data'].data.RESERVE_FAN_STOP_TIMEOUT != null) {
      this.range11 = this.device['data'].data.RESERVE_FAN_STOP_TIMEOUT;
    } else {
      this.range11 = 1;
      this.notPresentData11 = true;
    }

    if (this.device['data'].data.RESERVE_FAN_MIN_POWER != null && this.device['data'].data.RESERVE_FAN_WORKING_POWER != null) {
      this.range12 = [this.device['data'].data.RESERVE_FAN_MIN_POWER, this.device['data'].data.RESERVE_FAN_WORKING_POWER];
    } else {
      this.range12 = [0, 1];
      this.notPresentData12 = true;
    }

    if (this.device['data'].data.CENTRAL_HEATING_PUMP_START_TEMPERATURE != null) {
      this.range13 = this.device['data'].data.CENTRAL_HEATING_PUMP_START_TEMPERATURE;
    } else {
      this.range13 = 1;
      this.notPresentData13 = true;
    }

    if (this.device['data'].data.CENTRAL_HEATING_PUMP_HYSTERESIS != null) {
      this.range14 = this.device['data'].data.CENTRAL_HEATING_PUMP_HYSTERESIS;
    } else {
      this.range14 = 1;
      this.notPresentData14 = true;
    }

    if (this.device['data'].data.AUGER_CONVEYOR_WORK_MODE != null) {
      this.augerWorkMode = !this.device['data'].data.AUGER_CONVEYOR_WORK_MODE;
    } else {
      this.augerWorkMode = false;
      this.notPresentData25 = true;
    }

    if (this.device['data'].data.CLEANING_SETTINGS_CLEANER != null) {
      this.cleaningWork = !this.device['data'].data.CLEANING_SETTINGS_CLEANER;
    } else {
      this.cleaningWork = false;
      this.notPresentData23 = true;
    }

    if (this.device['data'].data.CLEANING_SETTINGS_FAN != null) {
      this.cleaningSettingsFun = !this.device['data'].data.CLEANING_SETTINGS_FAN;
    } else {
      this.cleaningSettingsFun = false;
      this.notPresentData26 = true;
    }

    if (this.device['data'].data.DEVICE_HYSTERESIS != null) {
      this.range15 = this.device['data'].data.DEVICE_HYSTERESIS;
    } else {
      this.range15 = 1;
      this.notPresentData15 = true;
    }

    if (this.device['data'].data.MIN_AUTOMATICS_POWER != null && this.device['data'].data.MAX_AUTOMATICS_POWER != null) {
      this.range16 = [this.device['data'].data.MIN_AUTOMATICS_POWER, this.device['data'].data.MAX_AUTOMATICS_POWER];
    } else {
      this.range16 = [1, 2];
      this.notPresentData16 = true;
    }

    if (this.device['data'].data.AUTOMATICS_POWER_DURING_SUPPLY != null) {
      this.range17 = this.device['data'].data.AUTOMATICS_POWER_DURING_SUPPLY;
    } else {
      this.range17 = 5;
      this.notPresentData17 = true;
    }

    if (this.device['data'].data.CLEANING_SETTINGS_FAN_EXTERN_POWER != null) {
      this.range18 = this.device['data'].data.CLEANING_SETTINGS_FAN_EXTERN_POWER;
    } else {
      this.range18 = 1;
      this.notPresentData18 = true;
    }

    if (this.device['data'].data.CLEANING_SETTINGS_FAN_POWER != null) {
      this.range19 = this.device['data'].data.CLEANING_SETTINGS_FAN_POWER;
    } else {
      this.range19 = 1;
      this.notPresentData19 = true;
    }

    if (this.device['data'].data.CLEANING_SETTINGS_WORK_TIME != null) {
      this.range20 = this.device['data'].data.CLEANING_SETTINGS_WORK_TIME;
    } else {
      this.range20 = 1;
      this.notPresentData20 = true;
    }

    this.weeklySettingsCheckBox = this.device.autoWeekly;

    if (this.device['data'].data.IGNITION_FAN_EXTERN_POWER_MIN != null && this.device['data'].data.IGNITION_FAN_EXTERN_POWER_MAX != null) {
      this.range21 = [this.device['data'].data.IGNITION_FAN_EXTERN_POWER_MIN, this.device['data'].data.IGNITION_FAN_EXTERN_POWER_MAX];
    } else {
      this.range21 = [0, 0];
      this.notPresentData21 = true;
    }

    if (this.device['data'].data.IGNITION_TIME != null) {
      this.range22 = this.device['data'].data.IGNITION_TIME;
    } else {
      this.range22 = 1;
      this.notPresentData22 = true;
    }

    this.service.isShowWeekleySettings.next(this.device.autoWeekly);

    if (this.device.removeDate) {
      this.service.getRemoveDate(this.device.id).subscribe((data) => {
        this.isRemoved = true;
        this.startCountdown(data);
      });
    }
  }

  startCountdown(data: number) {
    const endTime = moment(data).valueOf();
    this.intervalObj = setInterval(() => {
        this.removeDate = moment.duration(endTime - moment().valueOf());
        this.day = this.removeDate.days();
        this.hours = this.removeDate.hours();
        this.minutes = this.removeDate.minutes();
        this.seconds = this.removeDate.seconds();
      },
      this.ONE_SECOND_FOR_COUNTER);
  }

  changeState() {
    if (this.device.isOnline && this.device.permission === Permission.WRITE) {
      const data = this.device.data.data;
      this.changeName();
      this.changeDaysFlags()

      if (this.device.timezone !== this.timezone) {
        this.changeTimeZone();
      }

      this.changeWeeklySettings();
      const dto = {data: {}, id: this.device.data.id};
      if (!this.notPresentData) {
        this.setIfChanged('FAN_POWER_DURING_IGNITION', data, this.range[0], dto.data);
        this.setIfChanged('FAN_POWER_DURING_IGNITION_MAX', data, this.range[1], dto.data);
      }
      if (!this.notPresentData1) {
        this.setIfChanged('EXTERNAL_AUGER_CONVEYOR_WORK_TIME_IGNITION', data, this.range1, dto.data);
      }
      if (!this.notPresentData2) {
        this.setIfChanged('INTERNAL_AUGER_CONVEYOR_WORK_TIME_IGNITION', data, this.range2, dto.data);
      }
      if (!this.notPresentData3) {
        this.setIfChanged('OPTICAL_SENSOR_TEMPERATURE_GROWING', data, this.range3, dto.data);
      }
      if (!this.notPresentData24) {
        this.setIfChanged('WORK_PRIORITY', data, this.workPriority, dto.data);
      }
      if (!this.notPresentData4) {
        this.setIfChanged('INTERNAL_AUGER_CONVEYOR_WORK_TIME', data, this.range4 * this.VALUE_FOR_CHANGE_DEVICE_DATA, dto.data);
      }
      if (!this.notPresentData5) {
        this.setIfChanged('EXTERNAL_AUGER_CONVEYOR_PAUSE', data, this.range5 * this.VALUE_FOR_CHANGE_DEVICE_DATA, dto.data);
      }
      if (!this.notPresentData6) {
        this.setIfChanged('CLEANING_CYCLES_COUNT', data, this.range6 * this.VALUE_FOR_CHANGE_DEVICE_DATA, dto.data);
      }
      if (!this.notPresentData7) {
        this.setIfChanged('EXTERNAL_AUGER_CONVEYOR_WORK_TIME', data, this.range7 * this.VALUE_FOR_CHANGE_DEVICE_DATA, dto.data);
      }
      if (!this.notPresentData8) {
        this.setIfChanged('CLEANING_WORK_TIME', data, this.range8 * this.VALUE_FOR_CHANGE_DEVICE_DATA, dto.data);
      }
      if (!this.notPresentData9) {
        this.setIfChanged('MIN_FAN_WORKING_POWER', data, this.range9[0], dto.data);
        this.setIfChanged('MAX_FAN_WORKING_POWER', data, this.range9[1], dto.data);
      }
      if (!this.notPresentData10) {
        this.setIfChanged('RESERVE_FAN_START_TIMEOUT', data, this.range10, dto.data);
      }
      if (!this.notPresentData11) {
        this.setIfChanged('RESERVE_FAN_STOP_TIMEOUT', data, this.range11, dto.data);
      }
      if (!this.notPresentData12) {
        this.setIfChanged('RESERVE_FAN_MIN_POWER', data, this.range12[0], dto.data);
        this.setIfChanged('RESERVE_FAN_WORKING_POWER', data, this.range12[1], dto.data);
      }
      if (!this.notPresentData13) {
        this.setIfChanged('CENTRAL_HEATING_PUMP_START_TEMPERATURE', data, this.range13, dto.data);
      }
      if (!this.notPresentData14) {
        this.setIfChanged('CENTRAL_HEATING_PUMP_HYSTERESIS', data, this.range14, dto.data);
      }
      if (!this.notPresentData25) {
        const augerWorkMode = this.augerWorkMode ? 1 : 0;
        this.setIfChanged('AUGER_CONVEYOR_WORK_MODE', data, augerWorkMode, dto.data, true);
      }
      if (!this.notPresentData23) {
        const cleaningWork = this.cleaningWork ? 1 : 0;
        this.setIfChanged('CLEANING_SETTINGS_CLEANER', data, cleaningWork, dto.data, true);
      }
      if (!this.notPresentData26) {
        const cleaningSettingsFun = this.cleaningSettingsFun ? 1 : 0;
        this.setIfChanged('CLEANING_SETTINGS_FAN', data, cleaningSettingsFun, dto.data, true);
      }
      if (!this.notPresentData15) {
        this.setIfChanged('DEVICE_HYSTERESIS', data, this.range15, dto.data);
      }
      if (!this.notPresentData16) {
        this.setIfChanged('MIN_AUTOMATICS_POWER', data, this.range16[0], dto.data);
        this.setIfChanged('MAX_AUTOMATICS_POWER', data, this.range16[1], dto.data);
      }
      if (!this.notPresentData17) {
        this.setIfChanged('AUTOMATICS_POWER_DURING_SUPPLY', data, this.range17, dto.data);
      }
      if (!this.notPresentData18) {
        this.setIfChanged('CLEANING_SETTINGS_FAN_EXTERN_POWER', data, this.range18, dto.data);
      }
      if (!this.notPresentData19) {
        this.setIfChanged('CLEANING_SETTINGS_FAN_POWER', data, this.range19, dto.data);
      }
      if (!this.notPresentData20) {
        this.setIfChanged('CLEANING_SETTINGS_WORK_TIME', data, this.range20, dto.data);
      }
      if (!this.notPresentData21) {
        this.setIfChanged('IGNITION_FAN_EXTERN_POWER_MIN', data, this.range21[0], dto.data);
        this.setIfChanged('IGNITION_FAN_EXTERN_POWER_MAX', data, this.range21[1], dto.data);
      }
      if (!this.notPresentData22) {
        this.setIfChanged('IGNITION_TIME', data, this.range22, dto.data);
      }
      let found = false;
      for (const prop in dto.data) {
        if (dto.data.hasOwnProperty(prop)) {
          found = true;
          break;
        }
      }
      if (!found) {

        return;
      }

      this.service.changeDeviceState(dto, this.device.id, () => {

      }, (error: Error) => {
        console.log(error)
      }, 'type1');
    }
  }

  changeWeeklySettings() {
    const dto = new WeeklySettingDtoModel(this.weeklySettingsCheckBox, []);
    this.week = JSON.parse(localStorage.getItem(String(this.device.id))!)
    this.week.forEach((day, dayIndex) => {
      day.data.forEach((temperature: any, hourIndex: any) => {
        const hour = new SettingItem(dayIndex, this.deviceId, day.enable, hourIndex, this.device.id, temperature);
        dto.settings.push(hour as SettingItem);
      });

    });
    dto.settings.forEach((hour: SettingItem) => {
      hour.hourOfDay -= this.device.timezone;
      this.correctDayByDeviceTimezone(hour);
    });
    this.service.PutWeeklySettings(dto, this.device.id).subscribe((data: any) => {
    }, (error2) => {
    });
  }

  setIfChanged(propName: any, oldData: any, newValue: any, target: any, inverse = false) {
    if (!inverse) {
      if (oldData[propName] !== newValue) {
        target[propName] = newValue;
      }
    } else {
      if (oldData[propName] === newValue) {
        switch (typeof(newValue)) {
          case 'boolean':
            newValue = !newValue;
            break;
          case 'number':
            newValue = newValue === 0 ? 1 : 0;
            break;
        }
        target[propName] = newValue;
      }
    }
  }

  deleteDevice() {
    if (this.device.isOnline && this.device.permission === Permission.WRITE) {
      const deviceId = this.device.id;
      this.service.removeDevice(deviceId).pipe(switchMap((data) => this.service.getRemoveDate(deviceId)))
        .subscribe((data: number) => {
          if (data) {
            this.isRemoved = true;
            this.startCountdown(data);
          }
        });
    }
  }

  changeName() {
    if ((this.deviceName !== '') && (this.deviceName !== this.device.name)) {
      this.service.changeNameDevice(this.deviceName, this.device.id).subscribe();
    }
  }

  changeWeeklySettingsCheckBox() {
    this.service.isShowWeekleySettings.next(this.weeklySettingsCheckBox);
  }
  changeDaysFlags()  {
    let week = JSON.parse(localStorage.getItem(String(this.device.id))!)
    for (let i = 0; i < 7; i++) {
      week[i].enable = this.week[i].enable
    }
    localStorage.setItem(String(this.device.id), JSON.stringify(week))
  }

  changeTimeZone() {
    const dto = {
      timezone: this.timezone,
      devId: this.device.devId
    };
    this.service.changeTimeZone(dto, this.device.id).subscribe((data: any) => {}, (error) => {console.log(error)});
  }

}
