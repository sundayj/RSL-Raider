import { TestBed } from '@angular/core/testing';

import { RaidToolkitService } from './raid-toolkit.service';

describe('RaidToolkitService', () => {
  let service: RaidToolkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaidToolkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
