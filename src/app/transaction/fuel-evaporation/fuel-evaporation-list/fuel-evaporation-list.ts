import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fuel-evaporation-list',
  imports: [],
  templateUrl: './fuel-evaporation-list.html',
  styleUrl: './fuel-evaporation-list.css'
})
export class FuelEvaporationList {
  constructor(private router: Router) {}

  AddFuelEvaporation() {
    this.router.navigate(['/FuelEvaporationForm']);
  }
}
