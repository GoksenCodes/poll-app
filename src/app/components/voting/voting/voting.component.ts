import { Component, OnInit } from '@angular/core';
import { OptionsService } from 'src/app/services/options.service';
import { MatRadioChange } from '@angular/material/radio';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder, private optionsService: OptionsService) {
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
    this.updateVotingCount(votedOption);
    // this.votingService.updateVotingCount(votedOption);

    this.optionForm.reset();
  }

  updateVotingCount(votedOption: string) {
    this.votes.map(vote => {
      if ((vote.value = votedOption)) {
        vote.count++;
      }
    });
  }
}
