import { Component } from '@angular/core';
import { LocationStrategy } from '@angular/common';

import { ScoreStore } from 'src/app/store/score.store';
import { QuestionsStore } from 'src/app/store/questions.store';

@Component({
  selector: 'finish-page',
  templateUrl: './finish-page.component.html',
  styleUrls: ['./finish-page.component.less']
})
export class FinishPageComponent {

  constructor(
    private location: LocationStrategy,
    public scoreStore: ScoreStore,
    public questionsStore: QuestionsStore
  ) {
    this.preventBackButton();
  }

  /**
   * Prevent back button functionality in the browser.
   */
  private preventBackButton() {
    history.pushState(null, null, window.location.href);

    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }

}
