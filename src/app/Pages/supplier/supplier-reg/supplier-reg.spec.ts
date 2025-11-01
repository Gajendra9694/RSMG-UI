import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierReg } from './supplier-reg';

describe('SupplierReg', () => {
  let component: SupplierReg;
  let fixture: ComponentFixture<SupplierReg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierReg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierReg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
