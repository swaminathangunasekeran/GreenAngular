import { TestBed, inject } from '@angular/core/testing';

import { EditInsightService } from './edit-insight.service';

describe('EditInsightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditInsightService]
    });
  });

  it('should be created', inject([EditInsightService], (service: EditInsightService) => {
    expect(service).toBeTruthy();
  }));
});
