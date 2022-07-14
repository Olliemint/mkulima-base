import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WeatherData } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  

  constructor(private http: HttpClient) { }

 
    
  
  getWeatherData(place_id: string):Observable<WeatherData> {
    let params = new HttpParams();
    params = params.append('place_id', place_id);
    params = params.append('key','2mfy9j1ib41h5sv7ho81yba5pm8ucp92kwvv8rsl');
     return this.http.get<WeatherData>('https://www.meteosource.com/api/v1/free/point?&sections=all&timezone=UTC&language=en&units=metric', {params: params}); 
  }
  }




 
    // getWeatherData(place_id: string): Observable<WeatherData> {
    //   return this.http.get<WeatherData>(`${environment.apiUrl}/forecast?q={place_id}&appid=${environmanet.apiKey}`)} 
    //   {}
    //     headers: new HttpHeaders()
    //     .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
    //     .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
    //     params: new HttpParams()
    //     .set('q', place_id)
    //     .set('units', 'metric')
    //     .set('mode', 'json')
