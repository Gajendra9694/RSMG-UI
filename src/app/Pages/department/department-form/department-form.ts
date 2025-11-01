import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-form',
  imports: [],
  templateUrl: './department-form.html',
  styleUrl: './department-form.css'
})
export class DepartmentForm {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/Department']);
  }
}
