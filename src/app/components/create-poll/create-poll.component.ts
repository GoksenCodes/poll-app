import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {
  questionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      question: [null, [Validators.required]],
      options: [[null, [Validators.required]]]
    });
  }

  // addInitalOptions(): FormGroup {
  //   this.formBuilder.group({
  //     option1: [null, [Validators.required]],
  //     option2: [null, [Validators.required]]
  //   });
  // }
}
