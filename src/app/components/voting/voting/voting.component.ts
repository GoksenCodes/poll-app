import { Component, OnInit } from '@angular/core';
import { OptionsService } from 'src/app/services/manage-options/options.service';
import { MatRadioChange } from '@angular/material/radio';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ManageVotingService } from 'src/app/services/manage-voting/manage-voting.service';

export interface IOptionObject {
  value: string;
  count: number;
}

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  votingOptions: string[];
  optionForm: FormGroup;
  votes: IOptionObject[] = [];

  constructor(
    private fb: FormBuilder,
    private optionsService: OptionsService,
    private votingService: ManageVotingService
  ) {
    this.optionForm = this.createOptionForm();
    this.optionsService.respondentOptions.subscribe(options => {
      this.votingOptions = options;
      this.votingOptions.map(option => {
        let optionObject = {
          value: option,
          count: 0
        };
        console.log(optionObject);
        return this.votes.push(optionObject);
      });
    });
  }

  ngOnInit(): void {}

  createOptionForm(): FormGroup {
    return this.fb.group({
      option: [null]
    });
  }

  submit() {
    const votedOption = this.optionForm.value.option;
    this.updateVotes(votedOption);

    this.optionForm.reset();
  }

  updateVotes(votedOption: string) {
    this.votingService.updateVotingCount(votedOption);
  }
}
