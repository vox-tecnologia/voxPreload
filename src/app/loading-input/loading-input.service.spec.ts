import { TestBed, inject } from '@angular/core/testing';

import { LoadingInputService } from './loading-input.service';

describe('LoadingInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingInputService]
    });
  });

  it('should be created', inject([LoadingInputService], (service: LoadingInputService) => {
    expect(service).toBeTruthy();
  }));
});
