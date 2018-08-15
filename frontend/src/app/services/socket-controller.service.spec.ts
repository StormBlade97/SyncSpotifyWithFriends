import { TestBed, inject } from '@angular/core/testing';

import { SocketControllerService } from './socket-controller.service';

describe('SocketControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketControllerService]
    });
  });

  it('should be created', inject([SocketControllerService], (service: SocketControllerService) => {
    expect(service).toBeTruthy();
  }));
});
