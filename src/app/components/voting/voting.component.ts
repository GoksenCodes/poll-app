import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IOptionObject } from 'src/app/models/option-object.model';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  votingOptions: string[];
  optionForm: FormGroup;
  voteCounts: IOptionObject[] = [];
  arrayOfObjects = [];

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    this.optionForm = this.createOptionForm();
  }

  ngOnInit(): void {
    //subscribe options so that results get update in realtime
    this.dataService.options.subscribe(options => {
      this.votingOptions = options;

      // create blank votes object to be passed to the chart
      this.voteCounts = options.map(o => ({ value: o, count: 0 }))
    })
  }

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

    //increment vote count of the option that is voted
    const updatedVotes = this.voteCounts.map(vote => {
      if (vote.value === votedOption) {
        vote.count++
      }
      return vote
    })
    // send new data with updated vote count into the stream 
    this.dataService.updateVotingData(updatedVotes)
  }
}
