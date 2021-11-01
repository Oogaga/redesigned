import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DeviceSettingsComponent} from "../device-settings/device-settings.component";
import {Platform} from "@angular/cdk/platform";

@Component({
  selector: 'app-weekly-settings-day',
  templateUrl: './weekly-settings-day.component.html',
  styleUrls: ['./weekly-settings-day.component.css']
})
export class WeeklySettingsDayComponent implements OnInit, OnDestroy {

  hours: number[];
  choseTemperature: number[];
  dailyTemperature: any;
  temperature: number[];
  scrollbarTemperature: any;
  scrollbarHours: any;
  chosedHour: any;
  chosedTemperature: any;
  test: any
  dayNumber: any
  id: any
  dayOfWeek: string;
  daysOfWeek: string[] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
  isSafari: boolean;
  browser: boolean
  isIOS: boolean;
  hourIOS: number;
  temperatureIOS: number;
  delay = 10;
  interval: any


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private deviceSettings: DeviceSettingsComponent,
    private platform: Platform
  ) {
    this.dailyTemperature = this.data.data;
    this.dayNumber = this.data.day
    this.id = this.data.id
    this.hours = [];
    this.choseTemperature = [];
    this.test = ''
    this.temperature = this.dailyTemperature.data.map((item: string) => {
      return parseInt(item, 10);
    });
    this.dayOfWeek = this.daysOfWeek[this.dayNumber]
    this.isSafari = platform.SAFARI;
    this.browser = platform.BLINK
    this.isIOS = platform.IOS;
    this.hourIOS = 0;
    this.temperatureIOS = this.temperature[0];
  }


  ngOnInit(): void {
    this.isIOS = this.platform.IOS;

    if (this.platform.ANDROID) {
      for (let hour = 0; hour < 24; hour++) {
        this.hours.push(hour)
      }
      for (let temperatureCelsius = 40; temperatureCelsius < 91; temperatureCelsius++) {
        this.choseTemperature.push(temperatureCelsius)
      }
      console.log(this.dailyTemperature)

      setTimeout(() => {
        document.getElementsByClassName('not_chose')[0].classList.add('chosed_hour')
        this.scrollbarHours = document.getElementsByClassName('scrollbar_hours')
        this.scrollbarTemperature = document.getElementsByClassName('scrollbar_temperature')
        this.chosedHour = document.getElementsByClassName('chosed_hour')
        this.chosedTemperature = document.getElementsByClassName('chosed_temperature')
        this.scrollbarHours[0].scrollTop = 1000;
        this.scrollbarHours[0].addEventListener("scroll", this.debounce(this.setHour, 100));

        this.scrollbarHours[0].scrollTo({
          top: this.chosedHour[0],
          behavior: 'smooth'
        });

        setTimeout(() => {
          this.scrollbarTemperature[0].addEventListener("scroll", this.debounce(this.setTemp, 250))
        }, 1000)
      })
    } else if (this.platform.IOS) {

    }

  }
  ngOnDestroy() {
    let data = JSON.parse(localStorage.getItem(this.id)!)
    this.dailyTemperature.data = this.temperature.map((item:number)=>{return String(item)})
    data[this.dayNumber] = this.dailyTemperature

    localStorage.setItem(this.id,  JSON.stringify(data))
  }

  changeHour(flag: 'increase'|'decrease'|'check') {
    if ((this.hourIOS <= 0)&&(flag === 'decrease')) {this.hourIOS = 0; return }
    if ((this.hourIOS >= 23)&&(flag === 'increase')) {this.hourIOS = 23; return}

    if (flag === 'check'){
      this.temperatureIOS = this.temperature[this.hourIOS]
      return;
    }
    else if (flag === 'increase') {
      let pastTemp = this.temperature[this.hourIOS]
      this.hourIOS++
      let futureTemp = this.temperature[this.hourIOS]
      clearInterval(this.interval)

      this.interval = setInterval(()=>{
        if (pastTemp<futureTemp) {
          this.temperatureIOS++;
          pastTemp = this.temperatureIOS;
        }
        else if (pastTemp>futureTemp) {
          this.temperatureIOS--;
          pastTemp = this.temperatureIOS;
        }
        else clearInterval(this.interval)
      },this.delay)
      return;
    } else if (flag === 'decrease') {
      let pastTemp = this.temperature[this.hourIOS]
      this.hourIOS--
      let futureTemp = this.temperature[this.hourIOS]

      clearInterval(this.interval)
      this.interval = setInterval(()=>{
        if (pastTemp<futureTemp) {
          this.temperatureIOS++;
          pastTemp = this.temperatureIOS;
        }
        else if (pastTemp>futureTemp) {
          this.temperatureIOS--;
          pastTemp = this.temperatureIOS;
        }
        else clearInterval(this.interval)
      },this.delay)
      return;
    }
  }

  changeTemperature(flag: 'increase'|'decrease'|'check') {
    if ((this.temperatureIOS <= 40)&&(flag === 'decrease')) {this.temperature[this.hourIOS]=40;this.temperatureIOS = 40; return }
    if ((this.temperatureIOS >= 90)&&(flag === 'increase')) {this.temperature[this.hourIOS]=90;this.temperatureIOS = 90; return}

    if (flag === 'check'&& ((this.temperatureIOS<91)&&(this.temperatureIOS>39))){
      this.temperature[this.hourIOS] = this.temperatureIOS
      return;
    }
    else if ((flag === 'increase')&&(this.temperatureIOS>39)) {
      this.temperatureIOS++
      this.temperature[this.hourIOS] = this.temperatureIOS
      return;
    } else if ((flag === 'decrease')&&(this.temperatureIOS<91)) {
      this.temperatureIOS--
      this.temperature[this.hourIOS] = this.temperatureIOS
      return;
    }
    else return;
  }


  setHour(e: any) {
    const rect = e.target.getBoundingClientRect();
    const day = Number((<HTMLInputElement>document.getElementById('day')).value)
    const id = (<HTMLInputElement>document.getElementById('id')).value
    const centerCell = document.elementFromPoint(
      rect.left + e.target.offsetWidth / 2,
      rect.top + e.target.offsetHeight / 2
    );
    for (const chosedHour of e.target.getElementsByClassName('chosed_hour')) {
      chosedHour.classList.remove('chosed_hour');
    }
    if (centerCell) {
      centerCell.classList.add('chosed_hour');

      document.getElementById(JSON.parse(localStorage.getItem(id)!)[day].data[Number(document.getElementsByClassName('chosed_hour')[0].id)])!.scrollIntoView({
        block: "center",
        behavior: "smooth"
      })

      console.log(JSON.parse(localStorage.getItem(id)!)[day].data[Number(document.getElementsByClassName('chosed_hour')[0].id)])

    }
  }

  setTemp(e: any) {
    const day = Number((<HTMLInputElement>document.getElementById('day')).value)
    const id = (<HTMLInputElement>document.getElementById('id')).value
    const rect = e.target.getBoundingClientRect();
    const centerCell = document.elementFromPoint(
      rect.left + e.target.offsetWidth / 2,
      rect.top + e.target.offsetHeight / 2
    );
    for (const chosedHour of e.target.getElementsByClassName('chosed_temperature')) {
      chosedHour.classList.remove('chosed_temperature');
    }
    if (centerCell) {
      centerCell.classList.add('chosed_temperature');
      let data = JSON.parse(localStorage.getItem(id)!)
      data[day].data[Number(document.getElementsByClassName('chosed_hour')[0].id)] = Number(document.getElementsByClassName('chosed_temperature')[0].id)
      localStorage.setItem(id, JSON.stringify(data))
    }


  }


  debounce<T extends Function>(cb: T, wait = 0) {
    let h: any;
    let callable = (...args: any) => {
      clearTimeout(h);
      h = setTimeout(() => cb(...args), wait);
    };
    return <T>(<any>callable);
  }


}


