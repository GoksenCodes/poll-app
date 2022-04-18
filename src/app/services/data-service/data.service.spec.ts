import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

const mockOptionsData = [
  'Option 1',
  'Option 2'
]

const mockVotesData = [
  { value: 'Option 1', count: 0 },
  { value: 'Option 2', count: 0 }
]

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('updateOptions', () => {
    it('should update options', () => {

      service.updateOptionsData(mockOptionsData)

      service.options.subscribe(
        options => {
          expect(options.length).toBe(2),
            expect(options).toEqual(mockOptionsData)
        });
    });
  });

  describe('updateVotes', () => {
    it('should update votes', () => {

      service.updateVotingData(mockVotesData)

      service.votes.subscribe(
        votes => {
          expect(votes.length).toBe(2),
            expect(votes).toEqual(mockVotesData)
        });
    });
  });

});
