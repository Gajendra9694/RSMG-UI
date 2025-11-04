import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipEntryForm } from './dip-entry-form';

describe('DipEntryForm', () => {
  let component: DipEntryForm;
  let fixture: ComponentFixture<DipEntryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DipEntryForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipEntryForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
