import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormValue } from 'src/app/models/form-value';
@Component({
  selector: 'start-quiz-form',
  templateUrl: './start-quiz-form.component.html',
  styleUrls: ['./start-quiz-form.component.less']
})
export class StartQuizFormComponent implements OnInit {

  form: FormGroup;
  categories$: Observable<Category[]>;

  /**
   * Access the 'amount' input form control.
   */
  get amount(): AbstractControl {
    return this.form.controls['amount'];
  }

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService
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
  }

  onSubmit() {
    const formData = computePostData(this.form.value);
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
