import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentArts } from '../model/CurrentArtcs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private http:HttpClient;
  constructor() { 
    this.http=inject(HttpClient)
  }
  getCurrentArticles():Observable<CurrentArts>{
      return this.http.get<CurrentArts>(`http://localhost:5048/current`);
  }
  
}
