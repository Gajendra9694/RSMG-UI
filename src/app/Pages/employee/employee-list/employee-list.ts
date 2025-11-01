import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {
  constructor(private router: Router) {}

  AddEmployee() {
    this.router.navigate(['/EmployeeForm']);
  }
}
