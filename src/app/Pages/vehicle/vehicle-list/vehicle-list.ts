import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  imports: [],
  templateUrl: './vehicle-list.html',
  styleUrl: './vehicle-list.css'
})
export class VehicleList {
  constructor(private router: Router) {}

  AddVehicle() {
    this.router.navigate(['/VehicleForm']);
  }
}
