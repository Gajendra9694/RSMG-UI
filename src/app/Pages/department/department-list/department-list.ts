import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  imports: [],
  templateUrl: './department-list.html',
  styleUrl: './department-list.css'
})
export class DepartmentList {

  constructor(private router: Router) {}

  goToDeptForm() {
    this.router.navigate(['../DepartmentForm']); // relative to parent layout
  }
}
