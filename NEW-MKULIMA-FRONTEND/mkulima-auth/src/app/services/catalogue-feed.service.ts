import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CatalogueFeedService {
  public BASE_URL = environment.api

  constructor(private http:HttpClient) { }
  getCatalogue():Observable<any>{
    return this.http.get(`${this.BASE_URL}/merchandise`)
  }
}
