import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/EmployeeList']);
  }
}
