import { Component } from '@angular/core';

import { QuestionsStore } from 'src/app/store/questions.store';
import { AttemptCountStore } from 'src/app/store/attempt-count.store';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.less']
})
export class QuestionsComponent {

  constructor(
    public questionsStore: QuestionsStore,
    public attemptCountStore: AttemptCountStore
  ) { }

}
