import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {

  dateFromBackend: string;
  finishDate: any;

  month = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря'
  ]

  accept: boolean;

  constructor() {
    this.dateFromBackend = '';
    this.finishDate = ''
    this.accept = false
  }

  ngOnInit() {
    let imDate = JSON.parse(sessionStorage.getItem('im')!).endPrimeDate;
    let date = new Date(imDate)
    this.finishDate = `${date.getDay()} ${this.month[date.getMonth()]} ${date.getFullYear()}`
    console.log(this.finishDate)
  }

}
