import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() loc: string = '';
  weather: any = <any>{};
  forecast: any = <any>{};
  msg: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // this.searchWeather(this.loc);
  }

  searchWeather(loc: string){
    this.weatherService.getWeather(loc).subscribe((data: any) => {
      this.weather = data; 
      this.getForecast(data?.Key);
      this.msg = data.message;
      console.log("Weather Started: ", data)
    })
  }

  getForecast(loc: string) {
    this.weatherService.getForecast(loc).subscribe((data: any) => {
      this.forecast = data;
    })
  }

  resultFound(){
    return Object.keys(this.weather).length > 0;
  }

}
