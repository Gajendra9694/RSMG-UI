import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelEvaporationForm } from './fuel-evaporation-form';

describe('FuelEvaporationForm', () => {
  let component: FuelEvaporationForm;
  let fixture: ComponentFixture<FuelEvaporationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelEvaporationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelEvaporationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
