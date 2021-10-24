import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import firebase from "firebase/compat";
import functions = firebase.functions;
import {debounce, timeout} from "rxjs/operators";
import {$e} from "@angular/compiler/src/chars";

@Component({
  selector: 'app-weekly-settings-day',
  templateUrl: './weekly-settings-day.component.html',
  styleUrls: ['./weekly-settings-day.component.css']
})
export class WeeklySettingsDayComponent implements OnInit {

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
    @Inject(MAT_DIALOG_DATA) public data: any) {
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
    localStorage.setItem(this.dailyTemperature.name, JSON.stringify(this.temperature))

    console.log(JSON.stringify(this.dailyTemperature))
    console.log(this.data.day)


    setTimeout(() => {
      document.getElementsByClassName('not_chose')[0].classList.add('chosed_hour')
      this.scrollbarHours = document.getElementsByClassName('scrollbar_hours')
      this.scrollbarTemperature = document.getElementsByClassName('scrollbar_temperature')
      this.chosedHour = document.getElementsByClassName('chosed_hour')
      this.chosedTemperature = document.getElementsByClassName('chosed_temperature')
      this.scrollbarHours[0].scrollTop = 1000;
      this.scrollbarHours[0].addEventListener("scroll", this.debounce(this.check, 100));
      this.scrollbarHours[0].scrollTo({
        top: this.chosedHour[0],
        behavior: 'smooth'
      });
      setTimeout(()=> {
        this.scrollbarTemperature[0].addEventListener("scroll", this.debounce(this.setTemp, 100))
      },1000)


    })


  }


  check(e: any) {
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


      document.getElementById(JSON.parse(localStorage.getItem(id) || 'null')[day].data[Number(document.getElementsByClassName('chosed_hour')[0].id)])!.scrollIntoView({
        block: "center",
        behavior: "smooth"
      })
      console.log(JSON.parse(localStorage.getItem(id) || 'null')[day].data[Number(document.getElementsByClassName('chosed_hour')[0].id)])

    }
  }

  setTemp(e: any) {

    const rect = e.target.getBoundingClientRect();
    const centerCell = document.elementFromPoint(
      rect.left + e.target.offsetWidth / 2,
      rect.top + e.target.offsetHeight / 2
    );
    for (const chosedHour of e.target.getElementsByClassName('chosed_temperature')) {
      chosedHour.classList.remove('chosed_temperature');
    }
    if (centerCell)
      centerCell.classList.add('chosed_temperature');


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
