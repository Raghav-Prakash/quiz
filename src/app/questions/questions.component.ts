import { Component, OnInit } from '@angular/core';

import { QuestionsStore } from 'src/app/store/questions.store';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.less']
})
export class QuestionsComponent implements OnInit {

  constructor(
    public questionsStore: QuestionsStore
  ) { }

  ngOnInit() {
  }

}
