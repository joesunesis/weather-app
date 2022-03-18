import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  @Input() weather: any = <any>{}
  constructor() { }

  ngOnInit(): void {
  }

}
