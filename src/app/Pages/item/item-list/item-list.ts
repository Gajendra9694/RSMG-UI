import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {

  constructor(private router: Router) {}

  AddItem() {
    this.router.navigate(['/ItemForm']);
  }
}
