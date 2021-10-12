import {Inject, Injectable} from '@angular/core';
import {BASE_URL_TOKEN} from "../token";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {StaticData} from "../static/static-data";
import {BaseDeviceModel} from "../models/base-device.model";
import {WeeklySettingDtoModel} from "../models/dataOut/weeklysettingdto.model";

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  blockFullRefresh: boolean;
  ChartPoints = new Subject<any>();
  displayingDevices = new Subject<BaseDeviceModel[]>();
  isFirmware = new Subject<boolean>();
  isFirmwareFlag: boolean;
  isShowWeekleySettings = new Subject<boolean>();
  fullPointInfo = new Subject<any>();
  needFullRefresh: boolean;
  requestsInProcess: any[] = [];
  showWeeklySettingsFlag: boolean;
  stateActive: string;
  tempChartSettings: any[];
  typesStr: string;
  urlDeviceType: string;
  waitingRequests: any[] = [];

  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string,
              private http: HttpClient) {
    this.blockFullRefresh = false;
    this.isFirmwareFlag = false;
    this.needFullRefresh = false;
    this.tempChartSettings = [];
    this.showWeeklySettingsFlag = false;
    this.urlDeviceType = '';
    this.typesStr = '';
    this.stateActive = '';
    this.isShowWeekleySettings.subscribe((data) => this.showWeeklySettingsFlag = data);
    this.isFirmware.subscribe((data) => this.isFirmwareFlag = data);
  }

  // ---------------------------------------------------------------------settings

  getWeeklySettings(id: number) {
    const url = `${this.baseUrl}/device/${id}/weekly-settings`;
    return this.http.get(url);
  }

  changeNameDevice(name: string, id: number) {
    const url = `${this.baseUrl}/device/${id}/name`;
    return this.http.patch(url, name);
  }


  removeDevice(id: number): Observable<any> {
    const url = `${this.baseUrl}/device/disable/${id}`;
    return this.http.delete(url);
  }

  getRemoveDate(id: number): Observable<any> {
    const url = `${this.baseUrl}/device/remove/${id}/date`;
    return this.http.get(url);
  }

  restoreDevice(id: number) {
    const url = `${this.baseUrl}/device/restore/${id}`;
    return this.http.post(url, null);
  }


  changeDeviceState(data: any, deviceId: string, onNext: any, onError: any, deviceType: string) {
    if (this.requestsInProcess.indexOf(data.id) > -1) {
      this.waitingRequests[data.id] = () => this.changeDeviceState(data, deviceId, onNext, onError, deviceType);
      return;
    }
    const url = `${this.baseUrl}/device/${deviceType}/${deviceId}/data`;
    this.requestsInProcess.push(data.id);
    this.http.put(url, data).subscribe((resp) => {
      this.releaseRequest(data.id);
      if (onNext) {
        onNext(resp);
      }
    }, (error) => {
      this.releaseRequest(data.id);
      if (onError) {
        onError(error);
      }
    });
  }

  releaseRequest(id: number) {
    const index = this.requestsInProcess.indexOf(id);
    if (index === -1) {
      return;
    }
    this.requestsInProcess.splice(index, 1);
    const waiting = this.waitingRequests[id];
    const waitingIndex = this.waitingRequests.indexOf(id);
    this.waitingRequests.splice(waitingIndex, 1);
    if (waiting) {
      waiting();
    } else if (this.needFullRefresh) {
      this.getDevices();
    }
  }

  changeTimeZone(dto: any, id: number) {
    const url = `${this.baseUrl}/device/${id}`;
    return this.http.put(url, dto);
  }

  PutWeeklySettings(dto: WeeklySettingDtoModel, id: number) {
    const url = `${this.baseUrl}/device/${id}/weekly-settings`;
    return this.http.put(url, dto);
  }

// ------------------------------------------------------------------------------device component
  getDevices() {
    if (this.blockFullRefresh || this.requestsInProcess.length > 0) {
      this.needFullRefresh = true;
      return;
    }
    this.needFullRefresh = false;
    const url = `${this.baseUrl}/device/list/detailed`;
    this.http.get(url).subscribe((devices: any) => {
      if (this.requestsInProcess.length > 0 || this.blockFullRefresh) {
        this.needFullRefresh = true;
        return;
      }
      this.displayingDevices.next(devices);
    });
  }


  // ---------------------------------------------------------------------add device-modal-window
  getIsDeviceReadyStatus(id: string) {
    const url = `${this.baseUrl}/device/registration?deviceId=${id}`;
    return this.http.get(url);
  }

  addDevice(data: any) {
    const url = `${this.baseUrl}/device/registration`;
    return this.http.post(url, data);
  }

  // -------------------------------------------------------------------------history, firmware,updates
  getFirmwareUpdates() {
    const url = `${this.baseUrl}/firmware/list`;
    return this.http.get(url);
  }

  downloadUpdates(id: number): Observable<any> {
    const url = `${this.baseUrl}/firmware/${id}/file`;
    return this.http.get(url, {observe: "response", responseType: "blob"});
  }

  getFiles() {
    const url = `${this.baseUrl}/instruction/list`;
    return this.http.get(url);
  }

  downloadFile(id: number): Observable<any> {
    const header = {
      'Accept': 'application/octet-stream',
    }
    const url = `${this.baseUrl}/instruction/${id}/file`;
    return this.http.get(url, {headers: header, observe: "response", responseType: "blob"});
  }

  getOwnedDevices(): Observable<BaseDeviceModel[]> {
    const url = `${this.baseUrl}/device/list/live`;
    return this.http.get<BaseDeviceModel[]>(url);
  }
}
