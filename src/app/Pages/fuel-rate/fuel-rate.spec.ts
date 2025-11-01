import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelRate } from './fuel-rate';

describe('FuelRate', () => {
  let component: FuelRate;
  let fixture: ComponentFixture<FuelRate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelRate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelRate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
