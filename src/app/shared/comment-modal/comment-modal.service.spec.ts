import { TestBed, inject } from '@angular/core/testing';

import { CommentModalService } from './comment-modal.service';

describe('CommentModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentModalService]
    });
  });

  it('should be created', inject([CommentModalService], (service: CommentModalService) => {
    expect(service).toBeTruthy();
  }));
});
