import { Component, OnInit } from '@angular/core';
import { OptionsService } from 'src/app/services/options.service';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  votingOptions: string[];

  constructor(private optionsService: OptionsService) {
    this.optionsService.respondentOptions.subscribe(
      options => (this.votingOptions = options)
    );
  }

  ngOnInit(): void {
    console.log(this.votingOptions);

    //create form with radio buttons
    //onVote get the value, loop through array of objects find matching value, increment it's count.
  }

  radioChanged($event: MatRadioChange) {
    console.log($event);

    const checkedOptions = [];

    //create interface for array of objects +> value, counts
    //each change  //if .checked  go trhorugh the array,
    //find the matching value, +1 counts value
  }
}
