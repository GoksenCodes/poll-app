import { TestBed } from '@angular/core/testing';

import { ManageVotingService } from './manage-voting.service';

describe('ManageVotingService', () => {
  let service: ManageVotingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageVotingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
