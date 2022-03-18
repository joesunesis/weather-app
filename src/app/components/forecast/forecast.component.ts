import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() loc: string = 'Accra';
  weather: any = <any>{};
  forecast: any = <any>{};
  msg: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.searchWeather(this.loc);
  }

  searchWeather(loc: string){
    this.weatherService.getCity(loc).subscribe((data: any) => {
      this.weather = data; 
      this.getForecast(data[0]?.Key);
      this.msg = data?.message;
      console.log("Searching for city .... ", data)
    })
  }

  getForecast(loc: string) {
    this.weatherService.getForecast(loc).subscribe((data: any) => {
      this.forecast = data.DailyForecasts[0];
      this.msg = data.message;
      console.log("Weather Forecast Obtained: ", data)
    })
  }

  resultFound(){
    return Object.keys(this.weather).length > 0;
  }

}
