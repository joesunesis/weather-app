import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path:'', component: WeatherComponent},
  { path:'forecast', component: ForecastComponent},
  { path:'city', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
