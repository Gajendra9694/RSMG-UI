import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReg } from './company-reg';

describe('CompanyReg', () => {
  let component: CompanyReg;
  let fixture: ComponentFixture<CompanyReg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyReg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyReg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
