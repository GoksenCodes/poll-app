import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {
  questionForm: FormGroup;
  listOfOptions: string[];
  isOptionAdded = false;

  constructor(private fb: FormBuilder, private optionsService: OptionsService) {
    this.questionForm = this.createForm();
  }

  ngOnInit(): void {}

  createForm(): FormGroup {
    return this.fb.group({
      question: [null, [Validators.maxLength(80)]],
      options: this.fb.array([this.addEmptyOption(), this.addEmptyOption()])
    });
  }

  get options(): FormArray {
    return this.questionForm.get('options') as FormArray;
  }

  addEmptyOption() {
    return this.fb.group({
      option: [null]
    });
  }

  getOptionsValue(): string[] {
    return this.questionForm.value.options
      .filter(option => option.option != null)
      .map(option => option.option);
  }

  addOption(): void {
    this.optionsService.respondentOptions.next(this.getOptionsValue());
    this.options.push(this.addEmptyOption());
    this.isOptionAdded = true;
  }

  removeOption(optionIndex: number) {
    this.options.removeAt(optionIndex);
    console.log(this.options);
    this.optionsService.respondentOptions.next(this.getOptionsValue());
  }
}
