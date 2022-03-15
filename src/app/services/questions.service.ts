import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Question } from '../models/question';
import { ApiQuestions, ApiQuestionResult } from '../services/models/questions';
import { QUESTIONS_URL } from '../urls';
import { FormValue } from '../models/form-value';

/**
 * Mapper function that maps the API model of the questions to its equivalent
 * view model.
 */
function fromApiQuestions(apiQuestionResults: ApiQuestionResult[]): Question[] {
  return apiQuestionResults.map(result => ({
    category: result.category,
    type: result.type,
    difficulty: result.difficulty,
    question: result.question,
    correctAnswer: result.correct_answer,
    incorrectAnswers: result.incorrect_answers
  }));
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private http: HttpClient
  ) { }

  getQuestions(formValue: Partial<FormValue>): Observable<Question[]> {
    return this.http.get<ApiQuestions>(QUESTIONS_URL, {
      params: JSON.parse(JSON.stringify(formValue))
    }).pipe(
      map(apiQuestions => fromApiQuestions(apiQuestions.results))
    )
  }
}
