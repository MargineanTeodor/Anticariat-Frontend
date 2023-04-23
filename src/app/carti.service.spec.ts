import { TestBed } from '@angular/core/testing';

import { CartiService } from './carti.service';

describe('CartiService', () => {
  let service: CartiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
