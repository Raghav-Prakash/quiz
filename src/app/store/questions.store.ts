import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { FormValue } from 'src/app/models/form-value';
import { Question } from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';
import { LoaderService } from 'src/app/services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsStore {

  questions$: Observable<Question[]>;
  private questionsSubject: BehaviorSubject<Question[]> = new BehaviorSubject([]);

  constructor(
    private questionsService: QuestionsService,
    private loaderService: LoaderService,
  ) {
    this.questions$ = this.questionsSubject;
  }

  setQuestions(formValue: Partial<FormValue>) {
    const questions$ = this.questionsService.getQuestions(formValue);

    this.loaderService.showLoaderUntilComplete(questions$)
      .pipe(shareReplay())
      .subscribe(questions => this.questionsSubject.next(questions));
  }
}