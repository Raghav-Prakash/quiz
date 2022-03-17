import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormValue } from 'src/app/models/form-value';
import { QuestionsStore } from 'src/app/store/questions.store';
@Component({
  selector: 'start-quiz-form',
  templateUrl: './start-quiz-form.component.html',
  styleUrls: ['./start-quiz-form.component.less']
})
export class StartQuizFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  categories$: Observable<Category[]>;
  private subscriptions: Subscription = new Subscription();

  /**
   * Access the 'amount' input form control.
   */
  get amount(): AbstractControl {
    return this.form.controls['amount'];
  }

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private questionsStore: QuestionsStore,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      amount: [10, [
        Validators.required,
        Validators.pattern(/[0-9]+/),
        Validators.min(10),
        Validators.max(50)
      ]],
      category: [''],
      difficulty: [''],
      type: ['']
    });
  }

  ngOnInit() {
    this.categories$ = this.categoriesService.getCategories();

    // Upon seeing questions available in the observable, route to
    // /questions to display them.
    this.subscriptions.add(
      this.questionsStore.questions$
        .pipe(filter(questions => questions.length > 0))
        .subscribe(__ => this.router.navigate(['questions']))
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    const formValue = computePostData(this.form.value);
    this.questionsStore.setQuestions(formValue);
  }

}

/**
 * Utility function that extracts only the filled values in the form so that
 * a POST call with these values can be made.
 */
function computePostData(formValue: FormValue): Partial<FormValue> {
  const postData: Partial<FormValue> = {};

  Object.entries(formValue)
    .filter(([controlName, value]) => value !== '')
    .forEach(([controlName, value]) => postData[controlName] = value);

  return postData;
}
