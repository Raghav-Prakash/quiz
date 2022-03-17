import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { FormValue } from 'src/app/models/form-value';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsStore {

  questions$: Observable<Question[]>;
  private questionsSubject: BehaviorSubject<Question[]> = new BehaviorSubject([]);

  constructor(
    private questionsService: QuestionsService
  ) {
    this.questions$ = this.questionsSubject;
  }

  setQuestions(formValue: Partial<FormValue>) {
    this.questionsService.getQuestions(formValue)
      .pipe(shareReplay())
      .subscribe(questions => this.questionsSubject.next(questions));
  }
}