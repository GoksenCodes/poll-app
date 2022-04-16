import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {
  questionForm: FormGroup;
  optionForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

  addOption(): void {
    this.options.push(this.newOption());
  }

  removeOption(optionIndex: number) {
    this.options.removeAt(optionIndex);
  }
}
