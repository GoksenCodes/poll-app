import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreatePollComponent } from './create-poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CreatePollComponent', () => {
  let component: CreatePollComponent;
  let fixture: ComponentFixture<CreatePollComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePollComponent],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input elements with the initial option input', () => {
    const compiled = fixture.debugElement.nativeElement;
    const questionInput = compiled.querySelector('input[id="question"]');
    const optionInput = compiled.querySelector('input[id="option"]');

    expect(questionInput).toBeTruthy();
    expect(optionInput).toBeTruthy();
  });

  it('should test input errors', () => {
    const nameInput = component.questionForm.controls.question;
    expect(nameInput.errors.required).toBeTruthy();

    nameInput.setValue('Have you watched Matrix 3?');
    expect(nameInput.errors).toBeNull();
  });

});
