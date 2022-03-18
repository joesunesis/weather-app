import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiKey: string = '3h1Bpz9LZ3q8iciMosmvAuEGUp4iCDkL';
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

  getWeather(loc: string): any {
    return this.http.get(`${baseUrl}/${weatherUrl}/?q=${loc}&apikey=${apiKey}`);
  }
  
  getForecast(loc: string): any {
    console.log('forsalkjladfla');
    return this.http.get(`${baseUrl}/${forecastUrl}?q=${loc}&apikey=${apiKey}`);
  }
}
