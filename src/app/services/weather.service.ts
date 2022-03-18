import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiKey: string = 'Zl6FuSx5bRJAKkZbHCShadWciTM3S93d';
const baseUrl: string = 'http://dataservice.accuweather.com';

const searchCityUrl: string = 'locations/v1/cities/search'; 
const forecastUrl: string = 'forecasts/v1/daily/5day';
const weatherUrl: string = 'currentconditions/v1'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) {}

  getCity(loc: string): any {
    return this.http.get(`${baseUrl}/${searchCityUrl}/?q=${loc}&apikey=${apiKey}`);
  }

  getWeather(locKey: string): any {
    return this.http.get(`${baseUrl}/${weatherUrl}/${locKey}/?apikey=${apiKey}`);
  }
  
  getForecast(locKey: string): any {
    return this.http.get(`${baseUrl}/${forecastUrl}/${locKey}?apikey=${apiKey}`);
  }
}
