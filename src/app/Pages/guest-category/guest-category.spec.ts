import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCategory } from './guest-category';

describe('GuestCategory', () => {
  let component: GuestCategory;
  let fixture: ComponentFixture<GuestCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
