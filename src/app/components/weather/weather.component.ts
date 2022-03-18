import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() loc: string = 'Accra';
  weather: any = <any>{};
  msg: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.searchWeather(this.loc);
  }

  searchWeather(loc: string){
    this.weatherService.getCity(loc).subscribe((data: any) => {
      this.weather = data;
      this.getWeatherData(data[0]?.Key);
      this.msg = data.message;
      console.log("Searching for city .... ", data)
    })
  }

  getWeatherData(loc: string){
    this.weatherService.getWeather(loc).subscribe((data: any) => {
      this.weather = data;
      this.msg = data.message;
      console.log("Obtained Weather Data")
    })
  }

  resultFound() {
    return Object.keys(this.weather).length > 0;
  }

}
