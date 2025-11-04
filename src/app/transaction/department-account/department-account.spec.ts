import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAccount } from './department-account';

describe('DepartmentAccount', () => {
  let component: DepartmentAccount;
  let fixture: ComponentFixture<DepartmentAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
