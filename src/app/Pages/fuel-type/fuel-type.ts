import { Component, inject, OnInit } from '@angular/core';
import { FuelTypeModel } from '../../models/FuelType';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Fueltype } from '../../services/fueltype';

@Component({
  selector: 'app-fuel-type',
  imports: [],
  templateUrl: './fuel-type.html',
  styleUrl: './fuel-type.css'
})
export class FuelType {
//  fuelTypes: FuelTypeModel[] = [];

//   newFuel: FuelTypeModel = [];

//   constructor(private svc: Fueltype) {}

//   ngOnInit() {
//     this.load();
//   }

//   load() {
//     this.svc.getAll().subscribe({
//       next: data => this.fuelTypes = data,
//       error: err => console.error('Error loading fuel types', err)
//     });
//   }

//   add() {
//     this.svc.create(this.newFuel).subscribe({
//       next: _ => { this.newFuel = {}; this.load(); },
//       error: err => console.error(err)
//     });
//   }

//   update(ft: FuelTypeModel) {
//     if (!ft.FueltypeId) return;
//     this.svc.update(ft.FueltypeId, ft).subscribe({ next: _ => this.load() });
//   }

//   remove(id?: number) {
//     if (!id) return;
//     this.svc.delete(id).subscribe({ next: _ => this.load() });
//   }
}