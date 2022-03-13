import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'start-quiz-form',
  templateUrl: './start-quiz-form.component.html',
  styleUrls: ['./start-quiz-form.component.less']
})
export class StartQuizFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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
  }

  onSubmit() {
    console.log(this.form.value)
  }

}
