import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideFuelLedgerForm } from './outside-fuel-ledger-form';

describe('OutsideFuelLedgerForm', () => {
  let component: OutsideFuelLedgerForm;
  let fixture: ComponentFixture<OutsideFuelLedgerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutsideFuelLedgerForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsideFuelLedgerForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
