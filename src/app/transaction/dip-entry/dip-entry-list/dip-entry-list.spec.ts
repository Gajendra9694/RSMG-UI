import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipEntryList } from './dip-entry-list';

describe('DipEntryList', () => {
  let component: DipEntryList;
  let fixture: ComponentFixture<DipEntryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DipEntryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipEntryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
