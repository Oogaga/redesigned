import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DeviceSettingsComponent} from "../device-settings/device-settings.component";

@Component({
  selector: 'app-weekly-settings-day',
  templateUrl: './weekly-settings-day.component.html',
  styleUrls: ['./weekly-settings-day.component.css']
})
export class WeeklySettingsDayComponent implements OnInit{

  hours: number[];
  choseTemperature: number[];
  dailyTemperature: any;
  temperature: string | null;
  scrollbarTemperature: any;
  scrollbarHours: any;
  chosedHour: any;
  chosedTemperature: any;
  test: any
  dayNumber: any
  id: any
  dayOfWeek: string;
  daysOfWeek: string[] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private deviceSettings: DeviceSettingsComponent
  ) {
    this.dailyTemperature = this.data.data;
    this.dayNumber = this.data.day
    this.id = this.data.id
    this.hours = [];
    this.choseTemperature = [];
    this.test = ''
    this.temperature = this.dailyTemperature.data;
    this.dayOfWeek = this.daysOfWeek[this.dayNumber]
  }


  ngOnInit(): void {
    for (let hour = 0; hour < 24; hour++) {
      this.hours.push(hour)
    }
    for (let temperatureCelsius = 40; temperatureCelsius < 91; temperatureCelsius++) {
      this.choseTemperature.push(temperatureCelsius)
    }
    console.log(this.dailyTemperature )


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
      data[day].data[Number(document.getElementsByClassName('chosed_hour')[0].id)]=Number(document.getElementsByClassName('chosed_temperature')[0].id)
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


