import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRateList } from './vehicle-rate-list';

describe('VehicleRateList', () => {
  let component: VehicleRateList;
  let fixture: ComponentFixture<VehicleRateList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleRateList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleRateList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
