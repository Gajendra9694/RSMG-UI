import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outside-fuel-ledger-form',
  imports: [],
  templateUrl: './outside-fuel-ledger-form.html',
  styleUrl: './outside-fuel-ledger-form.css'
})
export class OutsideFuelLedgerForm {

 constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/OutsideFuelList']);
  }
}