import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  imports: [],
  templateUrl: './company-list.html',
  styleUrl: './company-list.css'
})
export class CompanyList {

  constructor(private router: Router) {}

  AddCompany() {
    this.router.navigate(['/CompanyForm']);
  }
}

