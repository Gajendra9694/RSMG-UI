import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionType } from './auction-type';

describe('AuctionType', () => {
  let component: AuctionType;
  let fixture: ComponentFixture<AuctionType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuctionType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
