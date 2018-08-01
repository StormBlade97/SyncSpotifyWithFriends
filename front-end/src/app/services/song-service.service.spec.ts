import { TestBed, inject } from '@angular/core/testing';

import { SongServiceService } from './song-service.service';

describe('SongServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongServiceService]
    });
  });

  it('should be created', inject([SongServiceService], (service: SongServiceService) => {
    expect(service).toBeTruthy();
  }));
});
