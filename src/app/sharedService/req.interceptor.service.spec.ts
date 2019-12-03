import { TestBed, inject } from '@angular/core/testing';

import { Req.InterceptorService } from './req.interceptor.service';

describe('Req.InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Req.InterceptorService]
    });
  });

  it('should be created', inject([Req.InterceptorService], (service: Req.InterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
