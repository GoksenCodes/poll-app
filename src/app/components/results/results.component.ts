import { Component, OnInit } from '@angular/core';
import { IOptionObject } from 'src/app/models/option-object.model';
import { DataService } from 'src/app/services/data-service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results$: Observable<IOptionObject[]>

  constructor(private dataService: DataService) {
    this.results$ = this.dataService.votes
  }

  ngOnInit(): void {
  }
}
