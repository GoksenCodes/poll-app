import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingComponent } from './voting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/app/services/data-service/data.service';

const mockData = [
  'Option 1',
  'Option 2',
  'Option 3'
]

describe('VotingComponent', () => {
  let component: VotingComponent;
  let fixture: ComponentFixture<VotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotingComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [DataService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
