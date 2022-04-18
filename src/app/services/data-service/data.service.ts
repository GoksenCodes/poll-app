import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IOptionObject } from 'src/app/models/option-object.model';

@Injectable({
  providedIn: 'root'
})

//BheaviourSubject holds the data that can be shared with other components
//Components can consume votes and/or options data thorugh data service
export class DataService {
  private votesSource: BehaviorSubject<IOptionObject[]> = new BehaviorSubject<
    IOptionObject[]
  >([]);
  votes = this.votesSource.asObservable();

  private optionsSource: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    []
  );
  options = this.optionsSource.asObservable();

  constructor() { }

  updateVotingData(votes: IOptionObject []) {
    this.votesSource.next(votes)
  }
  
  updateOptionsData(options: string[]) {
    this.optionsSource.next(options)
  }
}