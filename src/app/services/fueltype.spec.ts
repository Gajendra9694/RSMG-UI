import { TestBed } from '@angular/core/testing';

import { Fueltype } from './fueltype';

describe('Fueltype', () => {
  let service: Fueltype;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fueltype);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
