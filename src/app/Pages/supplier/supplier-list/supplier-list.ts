import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-list',
  imports: [],
  templateUrl: './supplier-list.html',
  styleUrl: './supplier-list.css'
})
export class SupplierList {

  constructor(private router: Router) {}

  goToDeptForm() {
    this.router.navigate(['../SupplierForm']); // relative to parent layout
  }
}
