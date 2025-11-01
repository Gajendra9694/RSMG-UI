import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../models/cityModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private base = `${environment.apiUrl}/city`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // add auth header if needed
    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<City[]> {
    return this.http.get<City[]>(this.base);
  }

  getById(id: number): Observable<City> {
    return this.http.get<City>(`${this.base}/${id}`);
  }

  create(city: City): Observable<City> {
    return this.http.post<City>(this.base, city, this.httpOptions);
  }

  update(id: number, city: City): Observable<City> {
    return this.http.put<City>(`${this.base}/${id}`, city, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.base}/${id}`, this.httpOptions);
  }
}
