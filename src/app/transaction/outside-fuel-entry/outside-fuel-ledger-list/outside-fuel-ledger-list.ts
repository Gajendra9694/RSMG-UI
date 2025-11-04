import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outside-fuel-ledger-list',
  imports: [],
  templateUrl: './outside-fuel-ledger-list.html',
  styleUrl: './outside-fuel-ledger-list.css'
})
export class OutsideFuelLedgerList {

  constructor(private router: Router) {}

  AddOutsideFuel() {
    this.router.navigate(['/OutsideFuelForm']);
  }
}
