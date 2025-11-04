import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-list',
  imports: [],
  templateUrl: './work-list.html',
  styleUrl: './work-list.css'
})
export class WorkList {

  constructor(private router: Router) {}

  AddWork() {
    this.router.navigate(['/WorkForm']);
  }
}

