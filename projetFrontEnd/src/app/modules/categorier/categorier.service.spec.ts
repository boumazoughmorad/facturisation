import { TestBed } from '@angular/core/testing';

import { CategorierService } from './categorier.service';

describe('CategorierService', () => {
  let service: CategorierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
