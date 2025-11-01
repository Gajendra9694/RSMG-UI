import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierType } from './supplier-type';

describe('SupplierType', () => {
  let component: SupplierType;
  let fixture: ComponentFixture<SupplierType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
