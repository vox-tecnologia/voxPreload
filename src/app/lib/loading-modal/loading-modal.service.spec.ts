import { TestBed, inject } from '@angular/core/testing';

import { LoadingModalService } from './loading-modal.service';

describe('LoadingModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingModalService]
    });
  });

  it('should be created', inject([LoadingModalService], (service: LoadingModalService) => {
    expect(service).toBeTruthy();
  }));
});
