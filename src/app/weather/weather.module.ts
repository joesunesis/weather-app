import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WeatherComponent } from '../components/weather/weather.component';
import { ForecastComponent } from '../components/forecast/forecast.component';
import { WeatherDetailComponent } from '../components/weather-detail/weather-detail.component';


@NgModule({
  declarations: [
    WeatherComponent,
    ForecastComponent,
    WeatherDetailComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [WeatherComponent]
})
export class WeatherModule { }
