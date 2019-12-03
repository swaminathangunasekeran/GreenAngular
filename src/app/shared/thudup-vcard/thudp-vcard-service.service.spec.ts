import { TestBed, inject } from '@angular/core/testing';

import { ThudpVcardServiceService } from './thudp-vcard-service.service';

describe('ThudpVcardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThudpVcardServiceService]
    });
  });

  it('should be created', inject([ThudpVcardServiceService], (service: ThudpVcardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
