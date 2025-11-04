import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEntryForm } from './sale-entry-form';

describe('SaleEntryForm', () => {
  let component: SaleEntryForm;
  let fixture: ComponentFixture<SaleEntryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleEntryForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleEntryForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
