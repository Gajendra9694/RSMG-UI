import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelType } from './fuel-type';

describe('FuelType', () => {
  let component: FuelType;
  let fixture: ComponentFixture<FuelType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
