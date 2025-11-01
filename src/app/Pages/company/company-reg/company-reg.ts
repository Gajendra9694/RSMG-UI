import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-reg',
  imports: [],
  templateUrl: './company-reg.html',
  styleUrl: './company-reg.css'
})
export class CompanyReg {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/CompanyList']);
  }
}
