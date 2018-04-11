import { TestBed, inject } from '@angular/core/testing';

import { LoadingGlobalService } from './loading-global.service';

describe('LoadingGlobalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingGlobalService]
    });
  });

  it('should be created', inject([LoadingGlobalService], (service: LoadingGlobalService) => {
    expect(service).toBeTruthy();
  }));
});
