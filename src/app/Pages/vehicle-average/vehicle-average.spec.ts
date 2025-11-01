import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAverage } from './vehicle-average';

describe('VehicleAverage', () => {
  let component: VehicleAverage;
  let fixture: ComponentFixture<VehicleAverage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleAverage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleAverage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
