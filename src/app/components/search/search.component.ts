import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loc: string = '';
  weatherSearch: any = <any>{};
  msg: string = '';

  @Output() emitLoc = new EventEmitter();

  constructor(private weatherService: WeatherService) {
   }

   ngOnInit(): void {
     // this.searchWeather(this.loc);
   }

   searchWeather(loc: string){
    this.weatherService.getCity(loc).subscribe((data: any) => {
      this.weatherSearch = data; 
      this.msg = data.message;
      console.log("Searching for city .... ", data)
    })
  }

  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
  }
}
