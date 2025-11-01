import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookUp } from './look-up';

describe('LookUp', () => {
  let component: LookUp;
  let fixture: ComponentFixture<LookUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
