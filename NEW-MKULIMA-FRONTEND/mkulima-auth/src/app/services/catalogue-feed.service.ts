import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  switchMap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { Merchandise } from '../models/merchandise';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CatalogueFeedService {
  public BASE_URL = environment.api;
  public COMMENT_URL = environment.comment;


  constructor(private http: HttpClient,private authService: AuthService) {}

  getCatalogue(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/merchandise`);
  }
  getFeeds(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/feeds`);
  }
  getCategorys(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/category`);
  }

  postCatalogue(data: any) {

    const formData = new FormData();
    formData.append('name',data.name);
    formData.append('description',data.description);
    formData.append('image', data.image);
    return this.authService.user().pipe(
      switchMap((user) => { 
      formData.append('author', user.id);
        
       return this.http.post(`${this.BASE_URL}/merchandise`, formData)
      })
    )
  }

  postFeed(data: any) {

    const formData = new FormData();
    formData.append('title',data.title);
    formData.append('description',data.description);
    formData.append('category',data.category);
    formData.append('image', data.image);
    return this.authService.user().pipe(
      switchMap((user) => { 
      formData.append('author', user.id);
        
       return this.http.post(`${this.BASE_URL}/feeds`, formData)
      })
    )
  }

  getComment(id: number){
    return this.http.get(`${this.COMMENT_URL}/${id}`)

  }

  postComment(data: any) {
    const formData = new FormData();
    formData.append('comment', data.comment);
     return this.http.post(`${this.BASE_URL}/comments`, formData)
    
    
  }

}
