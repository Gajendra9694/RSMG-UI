import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-register',
  imports: [],
  templateUrl: './vehicle-register.html',
  styleUrl: './vehicle-register.css'
})
export class VehicleRegister {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/VehicleList']);
  }
}
