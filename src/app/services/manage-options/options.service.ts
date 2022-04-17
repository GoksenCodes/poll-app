import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  respondentOptions: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    []
  );

  constructor() {}
}
