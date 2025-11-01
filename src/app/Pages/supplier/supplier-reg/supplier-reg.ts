import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-reg',
  imports: [],
  templateUrl: './supplier-reg.html',
  styleUrl: './supplier-reg.css'
})
export class SupplierReg {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/SupplierList']);
  }
}
