import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dip-entry-form',
  imports: [],
  templateUrl: './dip-entry-form.html',
  styleUrl: './dip-entry-form.css'
})
export class DipEntryForm {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/DipEntryList']);
  }
}
