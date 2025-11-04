import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuelTypeModel } from '../models/FuelType';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Fueltype {

  private base = `${environment.apiBassUrl}/FuelType`;

 constructor(private http: HttpClient) {}

  getAll(): Observable<FuelTypeModel[]> {
    return this.http.get<FuelTypeModel[]>(this.base);
  }

  getById(id: number): Observable<FuelTypeModel> {
    return this.http.get<FuelTypeModel>(`${this.base}/${id}`);
  }

  create(ft: FuelTypeModel): Observable<FuelTypeModel> {
    return this.http.post<FuelTypeModel>(this.base, ft);
  }

  update(id: number, ft: FuelTypeModel): Observable<FuelTypeModel> {
    return this.http.put<FuelTypeModel>(`${this.base}/${id}`, ft);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.base}/${id}`);
  }
}