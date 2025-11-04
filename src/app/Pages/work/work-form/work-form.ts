import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-form',
  imports: [],
  templateUrl: './work-form.html',
  styleUrl: './work-form.css'
})
export class WorkForm {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/WorkList']);
  }
}
