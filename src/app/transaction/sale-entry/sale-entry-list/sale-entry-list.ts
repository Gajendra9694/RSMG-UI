import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-entry-list',
  imports: [],
  templateUrl: './sale-entry-list.html',
  styleUrl: './sale-entry-list.css'
})
export class SaleEntryList {
  constructor(private router: Router) {}

  AddSaleEntry() {
    this.router.navigate(['/SaleForm']);
  }
}
