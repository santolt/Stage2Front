import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Journal } from '../interfaces/journal.interfaces';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AppiService {

  constructor(private http: HttpClient) { }


  getAppi(): Observable<Journal> {
    return this.http.get<Journal>(environment.endpoint)
  }

}
