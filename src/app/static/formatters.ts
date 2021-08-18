// import { TranslateService } from '@ngx-translate/core';
//
// export class Formatters {
//   static formatCelsius(value, translateService: TranslateService) {
//     if (value != null) {
//       return `${value} °C`;
//     } else {
//       return '-';
//     }
//
//   }
//
//   static formatPercent(value, translateService: TranslateService) {
//     if (value != null) {
//       return `${value} %`;
//     } else {
//       return '-';
//     }
//   }
//
//   static formatDegree(value, translateService: TranslateService) {
//     if (value != null) {
//       return `${value} °`;
//     } else {
//       return '-';
//     }
//   }
//
//   static formatAutomationState(value, translateService: TranslateService) {
//     const states = [
//       'DEVICES.STOPPED',
//       'DEVICES.STARTED',
//       'DEVICES.HEAT',
//       'DEVICES.SUPPORT',
//       'DEVICES.QUENCHING'
//     ];
//
//     return translateService.instant(states[value]);
//   }
//
//   static formatError(value, translateService: TranslateService) {
//     const errors = [
//       'DEVICES.NO_ERROR',
//       'DEVICES.ERROR_1',
//       'DEVICES.ERROR_2',
//       'DEVICES.ERROR_3',
//       'DEVICES.ERROR_4',
//       'DEVICES.ERROR_5',
//       'DEVICES.ERROR_6',
//       'DEVICES.ERROR_7',
//       'DEVICES.ERROR_8',
//       'DEVICES.ERROR_9'
//     ];
//
//     return translateService.instant(errors[value]);
//   }
//
//   static formatKg(value, translateService: TranslateService) {
//     if (value != null) {
//       return value + ' ' + translateService.instant('DEVICES.KG');
//     } else {
//       return '-';
//     }
//   }
//
//   static formatSeconds(value, translateService: TranslateService) {
//     if (value != null) {
//       return `${value} ${translateService.instant('DEVICES.SEC')}`;
//     } else {
//       return '-';
//     }
//   }
//
//   static formatPriority(value, translateService: TranslateService) {
//     const errors = [
//       'DEVICES.HOUSE_HEATING',
//       'DEVICES.PARALLEL_PUMPS',
//       'DEVICES.SUMMER_MODE'
//     ];
//
//     return translateService.instant(errors[value]);
//   }
//
//   static formatActivity(value, translateService: TranslateService) {
//     if (value != null) {
//       return translateService.instant(value ? 'OTHER.SWITCH_OFF' : 'OTHER.SWITCH_ON');
//     } else {
//       return '-';
//     }
//   }
//
//   static formatAirTouchActivity(value, translateService: TranslateService) {
//     if (value != null) {
//       return translateService.instant(value ? 'OTHER.SWITCH_ON' : 'OTHER.SWITCH_OFF');
//     } else {
//       return '-';
//     }
//   }
//
//   static formatSensorType(value, translateService: TranslateService) {
//     return translateService.instant(value ? 'DEVICES.SENSOR_TEMP' : 'DEVICES.SENSOR_OPTICAL');
//   }
//
//   static formatLevel(value, translateService: TranslateService) {
//     switch (Number(value)) {
//       case 0:
//         return translateService.instant('DEVICES.FULL');
//       case 1:
//         return translateService.instant('DEVICES.MEDIUM');
//       case 2:
//         return translateService.instant('DEVICES.EMPTY');
//       case 3:
//         return translateService.instant('DEVICES.ERROR');
//       default:
//         return '';
//     }
//   }
//
//   static formatRelayState(value, translateService: TranslateService) {
//     return translateService.instant(value ? 'DEVICES.WORK' : 'DEVICES.DOES_NOT_WORK');
//   }
//
//   static formatSensorState(value, translateService: TranslateService) {
//     return translateService.instant(value ? 'DEVICES.OPEN' : 'DEVICES.CLOSE');
//   }
// }
