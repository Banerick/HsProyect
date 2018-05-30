import { TestBed, inject } from '@angular/core/testing';

import { CartasService } from './cartas.service';

describe('CartasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartasService]
    });
  });

  it('should be created', inject([CartasService], (service: CartasService) => {
    expect(service).toBeTruthy();
  }));
});
