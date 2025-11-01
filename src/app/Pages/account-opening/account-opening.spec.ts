import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOpening } from './account-opening';

describe('AccountOpening', () => {
  let component: AccountOpening;
  let fixture: ComponentFixture<AccountOpening>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountOpening]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountOpening);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
