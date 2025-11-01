import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMainGroup } from './item-main-group';

describe('ItemMainGroup', () => {
  let component: ItemMainGroup;
  let fixture: ComponentFixture<ItemMainGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemMainGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMainGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
