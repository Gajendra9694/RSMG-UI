import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-rate-list',
  imports: [],
  templateUrl: './vehicle-rate-list.html',
  styleUrl: './vehicle-rate-list.css'
})
export class VehicleRateList {
  constructor(private router: Router) {}

  goToDeptForm() {
    this.router.navigate(['../VehicleRateChartForm']); // relative to parent layout
  }
}
