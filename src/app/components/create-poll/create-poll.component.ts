import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  Form
} from '@angular/forms';
import { OptionsService } from 'src/app/services/manage-options/options.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {
  questionForm: FormGroup;
  listOfOptions: string[];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.questionForm = this.createForm();
  }

  ngOnInit(): void { }

  createForm(): FormGroup {
    return this.fb.group({
      question: [null, [Validators.maxLength(80)]],
      options: this.fb.array([this.addEmptyOption()], Validators.maxLength(10))
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
    this.dataService.updateOptionsData(this.getOptionsValue());
    this.options.push(this.addEmptyOption());
  }

  removeOption(optionIndex: number) {
    this.options.removeAt(optionIndex);
    this.dataService.updateOptionsData(this.getOptionsValue());
  }
}
