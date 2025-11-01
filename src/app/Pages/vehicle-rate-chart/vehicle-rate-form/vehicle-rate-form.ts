import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-rate-form',
  imports: [],
  templateUrl: './vehicle-rate-form.html',
  styleUrl: './vehicle-rate-form.css'
})
export class VehicleRateForm {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/EmployeeList']);
  }
}
