import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  Form
} from '@angular/forms';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent {
  questionForm: FormGroup;
  listOfOptions: string[];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.questionForm = this.createForm();
  }

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
      option: [null, [Validators.maxLength(80)]]
    });
  }

  getOptionsValue(): string[] {
    return this.questionForm.value.options

      //in order to get only inputs with value filter out the null ones
      .filter(option => option.option != null)
      .map(option => option.option);
  }

  addOption(): void {
    this.options.push(this.addEmptyOption());
    this.dataService.updateOptionsData(this.getOptionsValue());
  }

  removeOption(optionIndex: number) {
    this.options.removeAt(optionIndex);
    this.dataService.updateOptionsData(this.getOptionsValue());
  }

  resetForm() {
    this.questionForm.reset();
    this.dataService.updateOptionsData([])
  }
}
