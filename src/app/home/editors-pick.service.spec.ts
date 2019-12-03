import { TestBed, inject } from '@angular/core/testing';

import { EditorsPickService } from './editors-pick.service';

describe('EditorsPickService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorsPickService]
    });
  });

  it('should be created', inject([EditorsPickService], (service: EditorsPickService) => {
    expect(service).toBeTruthy();
  }));
});
