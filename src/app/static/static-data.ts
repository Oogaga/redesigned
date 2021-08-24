// import { TranslateService } from '@ngx-translate/core';
// import { Formatters } from "./Formatters";
//
// import { DeviceTypesInfoModel } from '../models/DeviceTypesInfo.model';
//
// import { Rout } from '../models/rout.model';
//
// import { ServerError } from '../models/models';
//
// import { TimeZone } from '../models/timezones.model';
//
// import { TypeConfig1 } from '../models/Type-config-1.model';
//
// import { TypePermission } from '../models/type-permission.model';

export class StaticData {

  static MOBILE_CLIENT_WIDTH = 790;
  static MIN_AGE = 16;
  static MIN_DATE = new Date(1920, 0, 1);
  static MAX_DATE = new Date(2002, 0, 1);

  static DEFAULT_TEMPERATURE = 40;
  static HOURS_IN_DAY = 24;
  static SET_TIME_BEFORE_CLOSE = 2000;
  static ROUTE_LOGIN = '/login';
  static ROUTE_ADMIN = '/admin';
  static ROUTE_HOME = '/home';

  static BIO_UNIVERSAL = 'BIO_UNIVERSAL';
  static PELLET_LEVEL = 'PELLET_LEVEL';
  static SMART_SOCKET = 'SMART_SOCKET';
  static BIO_PID = 'BIO_PID';

  static Social = ['FACEBOOK', 'TWITTER', 'LINKEDIN', 'GOOGLE', 'NONE'];
//
//   static TimeZones: TimeZone[] = [
//     {value: -12, name: 'TIMEZONE.UTC-12:00'},
//     {value: -11, name: 'TIMEZONE.UTC-11:00'},
//     {value: -10, name: 'TIMEZONE.UTC-10:00'},
//     {value: -9, name: 'TIMEZONE.UTC-9:00'},
//     {value: -8, name: 'TIMEZONE.UTC-8:00'},
//     {value: -7, name: 'TIMEZONE.UTC-7:00'},
//     {value: -6, name: 'TIMEZONE.UTC-6:00'},
//     {value: -5, name: 'TIMEZONE.UTC-5:00'},
//     {value: -4, name: 'TIMEZONE.UTC-4:00'},
//     {value: -3, name: 'TIMEZONE.UTC-3:00'},
//     {value: -2, name: 'TIMEZONE.UTC-2:00'},
//     {value: -1, name: 'TIMEZONE.UTC-1:00'},
//     {value: 0, name: 'TIMEZONE.UTC+0:00'},
//     {value: 1, name: 'TIMEZONE.UTC+1:00'},
//     {value: 2, name: 'TIMEZONE.UTC+2:00'},
//     {value: 3, name: 'TIMEZONE.UTC+3:00'},
//     {value: 4, name: 'TIMEZONE.UTC+4:00'},
//     {value: 5, name: 'TIMEZONE.UTC+5:00'},
//     {value: 6, name: 'TIMEZONE.UTC+6:00'},
//     {value: 7, name: 'TIMEZONE.UTC+7:00'},
//     {value: 8, name: 'TIMEZONE.UTC+8:00'},
//     {value: 9, name: 'TIMEZONE.UTC+9:00'},
//     {value: 10, name: 'TIMEZONE.UTC+10:00'},
//     {value: 11, name: 'TIMEZONE.UTC+11:00'},
//     {value: 12, name: 'TIMEZONE.UTC+12:00'}
//   ];
//
//
//   static Criterion = [
//     {name: 'CRITERION.CRITERIA_1', value: 'CENTRAL_HEATING_TEMPERATURE'},
//     {name: 'CRITERION.CRITERIA_2', value: 'CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE'},
//     {name: 'CRITERION.CRITERIA_3', value: 'EXTERNAL_CENTRAL_HEATING_TEMPERATURE'},
//     {name: 'CRITERION.CRITERIA_4', value: 'EXTERNAL_CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE'},
//     {name: 'CRITERION.CRITERIA_5', value: 'OPTICAL_SENSOR_VALUE'},
//     {name: 'CRITERION.CRITERIA_6', value: 'WORKING_POWER_IN_PERCENT'},
//     {name: 'CRITERION.CRITERIA_7', value: 'ACTUAL_STATE'},
//     {name: 'CRITERION.CRITERIA_8', value: 'ACTUAL_ERROR'},
//     {name: 'CRITERION.CRITERIA_9', value: 'LEVEL_CURRENT'},
//     {name: 'CRITERION.CRITERIA_1', value: 'sensors_co'},
//     {name: 'CRITERION.CRITERIA_2', value: 'sensors_hws'},
//     {name: 'CRITERION.CRITERIA_3', value: 'neededTemperatures_co'},
//     {name: 'CRITERION.CRITERIA_4', value: 'neededTemperatures_hws'},
//     {name: 'CRITERION.CRITERIA_5', value: 'sensors_opt'},
//     {name: 'CRITERION.CRITERIA_6', value: 'power'},
//     {name: 'CRITERION.CRITERIA_7', value: 'automaticState'},
//     {name: 'CRITERION.CRITERIA_8', value: 'errors'}
//   ];
//
//   static AdminSearchDeviceCriterias = [
//     {name: 'id', value: 'BY_ID'},
//     {name: 'ip', value: 'BY_IP'},
//     {name: 'имени устройства', value: 'BY_NAME'},
//     {name: 'email владельца', value: 'BY_OWNER_EMAIL'}
//   ];
//
//   static AdminSearchUserCriterias = [
//     {name: 'id устройства', value: 'BY_DEVICE_ID'},
//     {name: 'email', value: 'BY_EMAIL'}
//   ];
//
//
//   static Rs485Parity = [
//     {
//       title: 'NO',
//       value: 0
//     },
//     {
//       title: 'EVEN',
//       value: 1
//     },
//     {
//       title: 'ODD',
//       value: 2
//     }
//   ];
//
//   static Rs485Speed = [
//     {
//       title: '300',
//       value: 0
//     },
//     {
//       title: '600',
//       value: 1
//     },
//     {
//       title: '1200',
//       value: 2
//     },
//     {
//       title: '2400',
//       value: 3
//     },
//     {
//       title: '4800',
//       value: 4
//     },
//     {
//       title: '9600',
//       value: 5
//     },
//     {
//       title: '14400',
//       value: 6
//     },
//     {
//       title: '19200',
//       value: 7
//     },
//     {
//       title: '28800',
//       value: 8
//     },
//     {
//       title: '38400',
//       value: 9
//     },
//     {
//       title: '57600',
//       value: 10
//     },
//     {
//       title: '115200',
//       value: 11
//     }
//   ];
//
//   static Rs485StopBits = [
//     {
//       title: '1',
//       value: 0
//     },
//     {
//       title: '2',
//       value: 1
//     }
//   ];
//
//   static TypePermissions: TypePermission[] = [
//     {name: 'DEVICES.READ', value: false},
//     {name: 'DEVICES.WRITE', value: true}
//   ];
//   private static _typeConfig1: TypeConfig1[] = [
//     {
//       param: 'CENTRAL_HEATING_TEMPERATURE',
//       name: 'TYPE_CONFIG_1.VALUE_1',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE',
//       name: 'TYPE_CONFIG_1.VALUE_2',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'OPTICAL_SENSOR_VALUE',
//       name: 'TYPE_CONFIG_1.VALUE_3',
//       formatter: Formatters.formatCelsius,
//       showPredicate: (data) => !data.SENSOR_TYPE
//     }, // TODO: Filter it
//     {
//       param: 'OPTICAL_SENSOR_VALUE',
//       name: 'TYPE_CONFIG_1.VALUE_4',
//       formatter: null,
//       showPredicate: (data) => data.SENSOR_TYPE
//     }, // TODO: Filter it
//     {
//       param: 'SENSOR_TYPE',
//       name: 'TYPE_CONFIG_1.VALUE_5',
//       formatter: Formatters.formatSensorType,
//       showPredicate: null
//     },
//     {
//       param: 'WORKING_POWER_IN_PERCENT',
//       name: 'TYPE_CONFIG_1.VALUE_6',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'ACTUAL_STATE',
//       name: 'TYPE_CONFIG_1.VALUE_7',
//       formatter: Formatters.formatAutomationState,
//       showPredicate: null
//     },
//     {
//       param: 'ACTUAL_ERROR',
//       name: 'TYPE_CONFIG_1.VALUE_8',
//       formatter: Formatters.formatError,
//       showPredicate: null
//     },
//     {
//       param: 'FUEL_AMOUNT',
//       name: 'TYPE_CONFIG_1.VALUE_9',
//       formatter: Formatters.formatKg,
//       showPredicate: null
//     },
//     {
//       param: 'EXTERNAL_CENTRAL_HEATING_TEMPERATURE',
//       name: 'TYPE_CONFIG_1.VALUE_10',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'EXTERNAL_CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE',
//       name: 'TYPE_CONFIG_1.VALUE_11',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'FAN_POWER_DURING_IGNITION',
//       name: 'TYPE_CONFIG_1.VALUE_12',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'FAN_POWER_DURING_IGNITION_MAX',
//       name: 'TYPE_CONFIG_1.VALUE_13',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'IGNITION_FAN_EXTERN_POWER_MIN',
//       name: 'TYPE_CONFIG_1.VALUE_14',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'IGNITION_FAN_EXTERN_POWER_MAX',
//       name: 'TYPE_CONFIG_1.VALUE_15',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'EXTERNAL_AUGER_CONVEYOR_WORK_TIME_IGNITION',
//       name: 'TYPE_CONFIG_1.VALUE_16',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'INTERNAL_AUGER_CONVEYOR_WORK_TIME_IGNITION',
//       name: 'TYPE_CONFIG_1.VALUE_17',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'OPTICAL_SENSOR_TEMPERATURE_GROWING',
//       name: 'TYPE_CONFIG_1.VALUE_18',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'IGNITION_TIME',
//       name: 'TYPE_CONFIG_1.VALUE_19',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'WORK_PRIORITY',
//       name: 'TYPE_CONFIG_1.VALUE_20',
//       formatter: Formatters.formatPriority,
//       showPredicate: null
//     },
//     {
//       param: 'INTERNAL_AUGER_CONVEYOR_WORK_TIME',
//       name: 'TYPE_CONFIG_1.VALUE_21',
//       formatter: (value, translateService: TranslateService) => Formatters.formatSeconds(value / 1000, translateService),
//       showPredicate: null
//     },
//     {
//       param: 'EXTERNAL_AUGER_CONVEYOR_PAUSE',
//       name: 'TYPE_CONFIG_1.VALUE_22',
//       formatter: (value, translateService: TranslateService) => Formatters.formatSeconds(value / 1000, translateService),
//       showPredicate: null
//     },
//     {
//       param: 'EXTERNAL_AUGER_CONVEYOR_WORK_TIME',
//       name: 'TYPE_CONFIG_1.VALUE_23',
//       formatter: (value, translateService: TranslateService) => Formatters.formatSeconds(value / 1000, translateService),
//       showPredicate: null
//     },
//     {
//       param: 'CLEANING_WORK_TIME',
//       name: 'TYPE_CONFIG_1.VALUE_24',
//       formatter: (value, translateService: TranslateService) => Formatters.formatSeconds(value / 1000, translateService),
//       showPredicate: null
//     },
//     {
//       param: 'CLEANING_CYCLES_COUNT',
//       name: 'TYPE_CONFIG_1.VALUE_25',
//       formatter: (value, translateService: TranslateService) => Formatters.formatSeconds(value / 1000, translateService),
//       showPredicate: null
//     },
//     {
//       param: 'MIN_FAN_WORKING_POWER',
//       name: 'TYPE_CONFIG_1.VALUE_26',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'MAX_FAN_WORKING_POWER',
//       name: 'TYPE_CONFIG_1.VALUE_27',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'RESERVE_FAN_START_TIMEOUT',
//       name: 'TYPE_CONFIG_1.VALUE_28',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'RESERVE_FAN_STOP_TIMEOUT',
//       name: 'TYPE_CONFIG_1.VALUE_29',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'RESERVE_FAN_MIN_POWER',
//       name: 'TYPE_CONFIG_1.VALUE_30',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'RESERVE_FAN_WORKING_POWER',
//       name: 'TYPE_CONFIG_1.VALUE_31',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'CENTRAL_HEATING_PUMP_HYSTERESIS',
//       name: 'TYPE_CONFIG_1.VALUE_32',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'CENTRAL_HEATING_PUMP_START_TEMPERATURE',
//       name: 'TYPE_CONFIG_1.VALUE_33',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'AUGER_CONVEYOR_WORK_MODE',
//       name: 'TYPE_CONFIG_1.VALUE_34',
//       formatter: Formatters.formatActivity,
//       showPredicate: null
//     },
//     {
//       param: 'DEVICE_HYSTERESIS',
//       name: 'TYPE_CONFIG_1.VALUE_35',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'MIN_AUTOMATICS_POWER',
//       name: 'TYPE_CONFIG_1.VALUE_36',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'MAX_AUTOMATICS_POWER',
//       name: 'TYPE_CONFIG_1.VALUE_37',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'AUTOMATICS_POWER_DURING_SUPPLY',
//       name: 'TYPE_CONFIG_1.VALUE_38',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'CLEANING_SETTINGS_WORK_TIME',
//       name: 'TYPE_CONFIG_1.VALUE_39',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'CLEANING_SETTINGS_FAN_POWER',
//       name: 'TYPE_CONFIG_1.VALUE_40',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'CLEANING_SETTINGS_FAN_EXTERN_POWER',
//       name: 'TYPE_CONFIG_1.VALUE_41',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'CLEANING_SETTINGS_CLEANER',
//       name: 'TYPE_CONFIG_1.VALUE_42',
//       formatter: Formatters.formatActivity,
//       showPredicate: null
//     },
//     {
//       param: 'CLEANING_SETTINGS_FAN',
//       name: 'TYPE_CONFIG_1.VALUE_43',
//       formatter: Formatters.formatActivity,
//       showPredicate: null
//     }
//   ];
//   private static _typeConfig2 = [
//     {
//       param: 'LEVEL_CURRENT',
//       name: 'TYPE_CONFIG_2.VALUE_1',
//       formatter: Formatters.formatLevel
//     },
//     {
//       param: 'RELAY_STATE',
//       name: 'TYPE_CONFIG_2.VALUE_2',
//       formatter: Formatters.formatRelayState
//     },
//     {
//       param: 'SENSOR_1_STATE',
//       name: 'TYPE_CONFIG_2.VALUE_3',
//       formatter: Formatters.formatSensorState
//     },
//     {
//       param: 'SENSOR_2_STATE',
//       name: 'TYPE_CONFIG_2.VALUE_4',
//       formatter: Formatters.formatSensorState
//     }
//   ];
//   private static _typeConfig7: TypeConfig1[] = [
//     {
//       param: 'sensors_co',
//       name: 'TYPE_CONFIG_1.VALUE_1',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'sensors_hws',
//       name: 'TYPE_CONFIG_1.VALUE_2',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'sensors_opt',
//       name: 'TYPE_CONFIG_1.VALUE_3',
//       formatter: Formatters.formatCelsius,
//       showPredicate: (data) => !data.SENSOR_TYPE
//     }, // TODO: Filter it
//     {
//       param: 'sensors_opt',
//       name: 'TYPE_CONFIG_1.VALUE_4',
//       formatter: null,
//       showPredicate: (data) => data.SENSOR_TYPE
//     }, // TODO: Filter it
//     // {
//     //   param: 'SENSOR_TYPE',
//     //   name: 'TYPE_CONFIG_1.VALUE_5',
//     //   formatter: Formatters.formatSensorType,
//     //   showPredicate: null
//     // },
//     {
//       param: 'power',
//       name: 'TYPE_CONFIG_1.VALUE_6',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'automaticState',
//       name: 'TYPE_CONFIG_1.VALUE_7',
//       formatter: Formatters.formatAutomationState,
//       showPredicate: null
//     },
//     {
//       param: 'errors',
//       name: 'TYPE_CONFIG_1.VALUE_8',
//       formatter: Formatters.formatError,
//       showPredicate: null
//     },
//     {
//       param: 'pelletConsumption',
//       name: 'TYPE_CONFIG_1.VALUE_9',
//       formatter: Formatters.formatKg,
//       showPredicate: null
//     },
//     {
//       param: 'neededTemperatures_co',
//       name: 'TYPE_CONFIG_1.VALUE_10',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'neededTemperatures_hws',
//       name: 'TYPE_CONFIG_1.VALUE_11',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'ignition_fanMinPower',
//       name: 'TYPE_CONFIG_1.VALUE_12',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'ignition_fanMaxPower',
//       name: 'TYPE_CONFIG_1.VALUE_13',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'ignition_externFanMinPower',
//       name: 'TYPE_CONFIG_1.VALUE_14',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'ignition_externFanMaxPower',
//       name: 'TYPE_CONFIG_1.VALUE_15',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'ignition_feederTimeOn',
//       name: 'TYPE_CONFIG_1.VALUE_16',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'ignition_screwTimeOn',
//       name: 'TYPE_CONFIG_1.VALUE_17',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'ignition_temperatureUp',
//       name: 'TYPE_CONFIG_1.VALUE_18',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'ignition_ignitionTime',
//       name: 'TYPE_CONFIG_1.VALUE_19',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'workPriority',
//       name: 'TYPE_CONFIG_1.VALUE_20',
//       formatter: Formatters.formatPriority,
//       showPredicate: null
//     },
//     {
//       param: 'screws_screwTimeOn',
//       name: 'TYPE_CONFIG_1.VALUE_21',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'screws_feederTimeOff',
//       name: 'TYPE_CONFIG_1.VALUE_22',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'screws_feederTimeOn',
//       name: 'TYPE_CONFIG_1.VALUE_23',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'screws_cleaningTimeOn',
//       name: 'TYPE_CONFIG_1.VALUE_24',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'screws_cleaningTimeOff',
//       name: 'TYPE_CONFIG_1.VALUE_25',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'fans_fanMinPower',
//       name: 'TYPE_CONFIG_1.VALUE_26',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'fans_fanMaxPower',
//       name: 'TYPE_CONFIG_1.VALUE_27',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'fans_externFanDelayOn',
//       name: 'TYPE_CONFIG_1.VALUE_28',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'fans_externFanDelayOff',
//       name: 'TYPE_CONFIG_1.VALUE_29',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'fans_externFanMinPower',
//       name: 'TYPE_CONFIG_1.VALUE_30',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'fans_externFanMaxPower',
//       name: 'TYPE_CONFIG_1.VALUE_31',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'pumps_histerezis',
//       name: 'TYPE_CONFIG_1.VALUE_32',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'pumps_temperatureOn',
//       name: 'TYPE_CONFIG_1.VALUE_33',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'workMode_feederInSupport',
//       name: 'TYPE_CONFIG_1.VALUE_34',
//       formatter: Formatters.formatAirTouchActivity,
//       showPredicate: null
//     },
//     {
//       param: 'workMode_histerezis',
//       name: 'TYPE_CONFIG_1.VALUE_35',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'workMode_minPower',
//       name: 'TYPE_CONFIG_1.VALUE_36',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'workMode_maxPower',
//       name: 'TYPE_CONFIG_1.VALUE_37',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'workMode_supportPower',
//       name: 'TYPE_CONFIG_1.VALUE_38',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'cleaningSettings_timeOn',
//       name: 'TYPE_CONFIG_1.VALUE_39',
//       formatter: Formatters.formatSeconds,
//       showPredicate: null
//     },
//     {
//       param: 'cleaningSettings_fanPower',
//       name: 'TYPE_CONFIG_1.VALUE_40',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'cleaningSettings_cleaningEnabled',
//       name: 'TYPE_CONFIG_1.VALUE_42',
//       formatter: Formatters.formatAirTouchActivity,
//       showPredicate: null
//     },
//     {
//       param: 'cleaningSettings_fanEnabled',
//       name: 'TYPE_CONFIG_1.VALUE_43',
//       formatter: Formatters.formatAirTouchActivity,
//       showPredicate: null
//     },
//     {
//       param: 'fans_fanCurrentPower',
//       name: 'TYPE_CONFIG_7.FAN_CURRENT_POWER',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'fans_fanExternCurrentPower',
//       name: 'TYPE_CONFIG_7.FAN_EXT_CURRENT_POWER',
//       formatter: Formatters.formatPercent,
//       showPredicate: null
//     },
//     {
//       param: 'sensors_coReturn',
//       name: 'TYPE_CONFIG_7.SENSOR_CORETURN',
//       formatter: Formatters.formatDegree,
//       showPredicate: null
//     },
//     {
//       param: 'sensors_screw',
//       name: 'TYPE_CONFIG_7.SENSOR_SCREW',
//       formatter: Formatters.formatDegree,
//       showPredicate: null
//     },
//     {
//       param: 'sensors_ttg',
//       name: 'TYPE_CONFIG_7.SENSOR_FTG',
//       formatter: Formatters.formatCelsius,
//       showPredicate: null
//     },
//     {
//       param: 'rs485Settings_address',
//       name: 'TYPE_CONFIG_7.RS485_ADDRESS',
//       formatter: null,
//       showPredicate: null
//     },
//     {
//       param: 'rs485Settings_parity',
//       name: 'TYPE_CONFIG_7.RS485_PARITY',
//       formatter: null,
//       showPredicate: null
//     },
//     {
//       param: 'rs485Settings_speed',
//       name: 'TYPE_CONFIG_7.RS485_SPEED',
//       formatter: null,
//       showPredicate: null
//     },
//     {
//       param: 'rs485Settings_stopBits',
//       name: 'TYPE_CONFIG_7.RS485_STOPBITS',
//       formatter: null,
//       showPredicate: null
//     }
//   ];
//   static DeviceTypesInfo: DeviceTypesInfoModel[] = [
//     {
//       value: StaticData.BIO_UNIVERSAL,
//       name: 'Bio Universal',
//       endpoint: 'type1',
//       parameters: [
//         'CENTRAL_HEATING_TEMPERATURE',
//         'CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE',
//         'EXTERNAL_CENTRAL_HEATING_TEMPERATURE',
//         'EXTERNAL_CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE',
//         'OPTICAL_SENSOR_VALUE',
//         'WORKING_POWER_IN_PERCENT',
//         'ACTUAL_STATE',
//         'ACTUAL_ERROR'
//       ],
//       historyConfig: StaticData._typeConfig1
//     } as DeviceTypesInfoModel,
//     {
//       value: StaticData.PELLET_LEVEL,
//       name: 'Pellete level',
//       endpoint: 'type6',
//       parameters: [
//         'LEVEL_CURRENT'
//       ],
//       historyConfig: StaticData._typeConfig2
//     } as DeviceTypesInfoModel,
//     {
//       value: StaticData.BIO_UNIVERSAL_GEFEST,
//       name: 'Bio Universal Gefest',
//       endpoint: null,
//       parameters: null,
//       historyConfig: null
//     } as DeviceTypesInfoModel,
//     {
//       value: StaticData.BIO_UNIVERSAL_OVEN,
//       name: 'Bio Universal Oven',
//       endpoint: null,
//       parameters: null,
//       historyConfig: null
//     } as DeviceTypesInfoModel,
//     {
//       value: StaticData.SMART_SOCKET,
//       name: 'Smart socket',
//       endpoint: null,
//       parameters: null,
//       historyConfig: null
//     }  as DeviceTypesInfoModel,
//     {
//       value: StaticData.AIR_TOUCH,
//       name: 'Air Touch',
//       endpoint: 'type7',
//       parameters: [
//         'sensors_co',
//         'sensors_hws',
//         'neededTemperatures_co',
//         'neededTemperatures_hws',
//         'sensors_opt',
//         'power',
//         'automaticState',
//         'errors'
//       ],
//       historyConfig: StaticData._typeConfig7
//     } as DeviceTypesInfoModel,
//     {
//       value: StaticData.BIO_UNIVERSAL_HIDE,
//       name: 'Bio Pid',
//       endpoint: 'type8',
//       parameters: [
//         'CENTRAL_HEATING_TEMPERATURE',
//         'CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE',
//         'EXTERNAL_CENTRAL_HEATING_TEMPERATURE',
//         'EXTERNAL_CENTRAL_HOT_WATER_SUPPLY_TEMPERATURE',
//         'OPTICAL_SENSOR_VALUE',
//         'WORKING_POWER_IN_PERCENT',
//         'ACTUAL_STATE',
//         'ACTUAL_ERROR'
//       ],
//       historyConfig: StaticData._typeConfig1
//     } as DeviceTypesInfoModel
//   ];
//
//   static Errors: ServerError[] = [
//     {
//       errorName: 'INVALID_PASSWORD',
//       message: 'ERRORS.INVALID_PASSWORD',
//       errorCode: '1000101'
//     },
//     {
//       errorName: 'MISMATCH_PASSWORDS',
//       message: 'ERRORS.MISMATCH_PASSWORDS',
//       errorCode: '1000102'
//     },
//     {
//       errorName: 'TARGET_ALREADY_EXISTS',
//       message: 'ERRORS.TARGET_ALREADY_EXISTS',
//       errorCode: '1000200'
//     },
//     {
//       errorName: 'EMAIL_EXISTS',
//       message: 'ERRORS.EMAIL_EXISTS',
//       errorCode: '1000201'
//     },
//     {
//       errorName: 'PHONE_EXISTS',
//       message: 'ERRORS.PHONE_EXISTS',
//       errorCode: '1000202'
//     },
//     {
//       errorName: 'TARGET_NOT_FOUND',
//       message: 'ERRORS.TARGET_NOT_FOUND',
//       errorCode: '1000210'
//     },
//     {
//       errorName: 'EMAIL_NOT_EXISTS',
//       message: 'ERRORS.EMAIL_NOT_EXISTS',
//       errorCode: '1000211'
//     },
//     {
//       errorName: 'CONSTRAINT_VIOLATION',
//       message: 'ERRORS.CONSTRAINT_VIOLATION',
//       errorCode: '1000300'
//     },
//     {
//       errorName: 'TOKEN_NOT_VALID',
//       message: 'ERRORS.TOKEN_NOT_VALID',
//       errorCode: '1000301'
//     },
//     {
//       errorName: 'SOCIAL_DATA_NOT_AVAILABLE',
//       message: 'ERRORS.SOCIAL_DATA_NOT_AVAILABLE',
//       errorCode: '1000302'
//     },
//     {
//       errorName: 'RESTRICTED_NO_ACCESS',
//       message: 'ERRORS.RESTRICTED_NO_ACCESS',
//       errorCode: '1000303'
//     },
//     {
//       errorName: 'INTERNAL_ERROR',
//       message: 'ERRORS.INTERNAL_ERROR',
//       errorCode: '1000500'
//     }
//   ];
//
//   static Routs: Rout[] = [
//     {path: '/home/users', name: 'userPage'},
//     {path: '/home/support', name: 'isSupportPage'},
//     {path: '/home/devices', name: 'devicesPage'},
//     {path: '/home/contacts', name: 'contactsPage'},
//     {path: '/home/instruction', name: 'instructionPage'},
//     {path: '/admin/firmware', name: 'adminFirmwarePage'}
//   ];
//
  static REFRESH_INTERVAL = 50000;
//
  static BIOPROM_LINK = 'http://bioprom.ua/';
//
//   static GetDeviceTypeInfo(deviceType) {
//     return StaticData.DeviceTypesInfo.find((item) => item.value === deviceType);
//   }
//
}
