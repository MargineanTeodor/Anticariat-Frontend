import { TestBed } from '@angular/core/testing';

import { ServiceComandaService } from './service-comanda.service';

describe('ServiceComandaService', () => {
  let service: ServiceComandaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceComandaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
