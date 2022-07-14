import { Component, OnInit } from '@angular/core';
import {   Daum, Daum2, Hourly, WeatherData } from '../models/weather.models';
import { WeatherService } from '../services/weather.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData!:WeatherData;
  hourly!:Hourly;
  daum!:Daum;
  data1!:Daum2;
    place_id: string = 'Nairobi';
    DatePipe:any;
  

  constructor(private weatherService: WeatherService) {

  }

 

  ngOnInit(): void {
  this.getWeatherData(this.place_id);
  this.place_id = '';
  
  }

  onSubmit() {
  this.getWeatherData(this.place_id);
  this.place_id = '';
  }

  private getWeatherData(place_id: string) {
  this.weatherService.getWeatherData(this.place_id)
  .subscribe({
      next: (response) => {
      this.weatherData = response as any;
      console.log(response);
      }
  });
  }
  date: Date = new Date()
}
