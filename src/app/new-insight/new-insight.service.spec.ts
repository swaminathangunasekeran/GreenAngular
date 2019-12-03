import { TestBed, inject } from '@angular/core/testing';

import { NewInsightService } from './new-insight.service';

describe('NewInsightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewInsightService]
    });
  });

  it('should be created', inject([NewInsightService], (service: NgService) => {
    expect(service).toBeTruthy();
  }));
});
