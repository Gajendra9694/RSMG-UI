import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideFuelLedgerList } from './outside-fuel-ledger-list';

describe('OutsideFuelLedgerList', () => {
  let component: OutsideFuelLedgerList;
  let fixture: ComponentFixture<OutsideFuelLedgerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutsideFuelLedgerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutsideFuelLedgerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
