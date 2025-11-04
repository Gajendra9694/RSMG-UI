import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelEvaporationList } from './fuel-evaporation-list';

describe('FuelEvaporationList', () => {
  let component: FuelEvaporationList;
  let fixture: ComponentFixture<FuelEvaporationList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelEvaporationList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelEvaporationList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
