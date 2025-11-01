import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleStrength } from './vehicle-strength';

describe('VehicleStrength', () => {
  let component: VehicleStrength;
  let fixture: ComponentFixture<VehicleStrength>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleStrength]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleStrength);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
