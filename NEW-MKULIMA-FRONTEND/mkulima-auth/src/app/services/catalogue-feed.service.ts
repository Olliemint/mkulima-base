import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Merchandise } from '../models/merchandise';


@Injectable({
  providedIn: 'root'
})
export class CatalogueFeedService {
  public BASE_URL = environment.api

  constructor(private http:HttpClient) { }
  getCatalogue():Observable<any>{
    return this.http.get(`${this.BASE_URL}/merchandise`)
  }
  getFeeds():Observable<any>{
    return this.http.get(`${this.BASE_URL}/feeds`)
  }
  getCategorys():Observable<any>{
    return this.http.get(`${this.BASE_URL}/category`)
  }
  
  postCatalogue(data: any){
    return this.http.post<Merchandise>(`${this.BASE_URL}/merchandise`, data)

  }

}
