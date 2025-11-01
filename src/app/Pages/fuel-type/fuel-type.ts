import { Component, inject } from '@angular/core';
import { FuelTypeModel } from '../../models/FuelType';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fuel-type',
  imports: [FormsModule],
  templateUrl: './fuel-type.html',
  styleUrl: './fuel-type.css'
})
export class FuelType {

fueltypeObj : FuelTypeModel;
http= inject(HttpClient)

constructor(){
  this.fueltypeObj = new FuelTypeModel();
}
onSaveFuelType(){
this.http.post
}

}
