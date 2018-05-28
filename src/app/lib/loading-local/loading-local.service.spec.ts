import { TestBed, inject } from '@angular/core/testing';

import { LoadingLocalService } from './loading-local.service';

describe('LoadingLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingLocalService]
    });
  });

  it('should be created', inject([LoadingLocalService], (service: LoadingLocalService) => {
    expect(service).toBeTruthy();
  }));
});
