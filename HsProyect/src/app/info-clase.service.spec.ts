import { TestBed, inject } from '@angular/core/testing';

import { InfoClaseService } from './info-clase.service';

describe('InfoClaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoClaseService]
    });
  });

  it('should be created', inject([InfoClaseService], (service: InfoClaseService) => {
    expect(service).toBeTruthy();
  }));
});
