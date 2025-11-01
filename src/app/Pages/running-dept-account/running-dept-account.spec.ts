import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningDeptAccount } from './running-dept-account';

describe('RunningDeptAccount', () => {
  let component: RunningDeptAccount;
  let fixture: ComponentFixture<RunningDeptAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunningDeptAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunningDeptAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
