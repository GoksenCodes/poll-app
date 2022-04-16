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
  optionForm: FormGroup;
  listOfOptions: string[];

  constructor(private fb: FormBuilder, private optionsService: OptionsService) {
    this.questionForm = this.createForm();
  }

  ngOnInit(): void {}

  createForm(): FormGroup {
    return this.fb.group({
      question: [null, [Validators.maxLength(80)]],
      options: this.fb.array([this.newOption()])
    });
  }

  get options(): FormArray {
    return this.questionForm.get('options') as FormArray;
  }

  newOption() {
    this.optionForm = this.fb.group({
      option: [null]
    });
    return this.optionForm;
  }

  getOptionsValue(): string[] {
    return this.questionForm.value.options.map(option => option.option);
  }

  addOption(): void {
    this.options.push(this.newOption());
    this.optionsService.respondentOptions = this.getOptionsValue();
  }

  removeOption(optionIndex: number) {
    this.options.removeAt(optionIndex);
    this.optionsService.respondentOptions = this.getOptionsValue();
  }
}
