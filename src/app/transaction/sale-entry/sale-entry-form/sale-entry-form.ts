import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-entry-form',
  imports: [],
  templateUrl: './sale-entry-form.html',
  styleUrl: './sale-entry-form.css'
})
export class SaleEntryForm {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/SaleList']);
  }
}
