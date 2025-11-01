// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CityService } from '../../services/city';
// import {City } from '../../models/cityModel';
// @Component({
//   selector: 'app-city',
//   imports: [],
//   templateUrl: './city.html',
//   styleUrl: './city.css'
// })
// export class City implements OnInit{

//  cities: City[] = [];
//   loading = false;
//   error = '';

//   constructor(private cityService: CityService, private router: Router) {}

//   ngOnInit(): void {
//     this.load();
//   }

//   load() {
//     this.loading = true;
//     this.cityService.getAll().subscribe({
//       next: data => { this.cities = data; this.loading = false; },
//       error: err => { this.error = err.message || 'Error'; this.loading = false; }
//     });
//   }

//   add() {
//     this.router.navigate(['/cities/new']);
//   }

//   edit(city: City) {
//     if (city.cityId != null) this.router.navigate(['/cities/edit', city.cityId]);
//   }

//   delete(id?: number) {
//     if (!id) return;
//     if (!confirm('Are you sure to delete this city?')) return;
//     this.cityService.delete(id).subscribe({
//       next: () => this.load(),
//       error: e => alert('Delete failed: ' + (e.message || e))
//     });
//   }
// }
