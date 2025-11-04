import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fuel-evaporation-form',
  imports: [],
  templateUrl: './fuel-evaporation-form.html',
  styleUrl: './fuel-evaporation-form.css'
})
export class FuelEvaporationForm {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/FuelEvaporationList']);
  }
}
