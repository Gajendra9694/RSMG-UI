import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEntryList } from './sale-entry-list';

describe('SaleEntryList', () => {
  let component: SaleEntryList;
  let fixture: ComponentFixture<SaleEntryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleEntryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleEntryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
