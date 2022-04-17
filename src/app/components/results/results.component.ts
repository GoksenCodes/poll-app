import { Component, OnInit } from '@angular/core';
import { ManageVotingService } from 'src/app/services/manage-voting/manage-voting.service';
import { IOptionObject } from 'src/app/models/option-object.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results: IOptionObject[] = [];

  constructor(private votingService: ManageVotingService) {
    this.votingService.votes.subscribe(votes => (this.results = votes));
  }

  ngOnInit(): void {}
}
