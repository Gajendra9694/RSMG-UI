import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningStock } from './opening-stock';

describe('OpeningStock', () => {
  let component: OpeningStock;
  let fixture: ComponentFixture<OpeningStock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningStock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeningStock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
