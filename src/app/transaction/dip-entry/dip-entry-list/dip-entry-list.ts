import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dip-entry-list',
  imports: [],
  templateUrl: './dip-entry-list.html',
  styleUrl: './dip-entry-list.css'
})
export class DipEntryList {
  constructor(private router: Router) {}

  AddDipEntry() {
    this.router.navigate(['/DipEntryForm']);
  }
}
