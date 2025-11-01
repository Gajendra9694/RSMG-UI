import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSubSubGroup } from './item-sub-sub-group';

describe('ItemSubSubGroup', () => {
  let component: ItemSubSubGroup;
  let fixture: ComponentFixture<ItemSubSubGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSubSubGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSubSubGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
