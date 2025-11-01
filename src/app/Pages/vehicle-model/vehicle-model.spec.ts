import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleModel } from './vehicle-model';

describe('VehicleModel', () => {
  let component: VehicleModel;
  let fixture: ComponentFixture<VehicleModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
