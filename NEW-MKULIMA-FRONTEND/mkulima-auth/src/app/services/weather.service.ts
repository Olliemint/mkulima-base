import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WeatherData } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  

  constructor(private http: HttpClient) { }

 
    
  

getWeatherData(place_id:string){
   return this.http.get('https://www.meteosource.com/api/v1/free/point?place_id=eldoret&sections=all&timezone=UTC&language=en&units=metric&key=pib7gf1upu6j7n4apqbzr3ukf4y5uexvyjg3u83w'); 



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
}