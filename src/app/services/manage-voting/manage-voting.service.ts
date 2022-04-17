import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IOptionObject } from 'src/app/models/option-object.model';

@Injectable({
  providedIn: 'root'
})
export class ManageVotingService {
  updatedVotes: IOptionObject[] = [];
  votes: BehaviorSubject<IOptionObject[]> = new BehaviorSubject<
    IOptionObject[]
  >([]);

  constructor() {}

  updateVotingCount(votedOption: string) {
    const currentVotes = this.votes.getValue();

    this.updatedVotes = currentVotes.map(vote => {
      if ((vote.value = votedOption)) {
        vote.count++;
      }
      return vote;
    });
    this.votes.next(currentVotes);
  }
}
