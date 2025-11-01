import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  imports: [],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css'
})
export class ItemForm {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/ItemList']);
  }
}
