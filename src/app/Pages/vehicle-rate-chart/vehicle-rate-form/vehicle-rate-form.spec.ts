import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRateForm } from './vehicle-rate-form';

describe('VehicleRateForm', () => {
  let component: VehicleRateForm;
  let fixture: ComponentFixture<VehicleRateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleRateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleRateForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
