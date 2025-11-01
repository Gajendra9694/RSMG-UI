import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSubGroup } from './item-sub-group';

describe('ItemSubGroup', () => {
  let component: ItemSubGroup;
  let fixture: ComponentFixture<ItemSubGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSubGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSubGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
