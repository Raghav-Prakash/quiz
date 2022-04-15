import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ScoreActions } from 'src/app/store/actions/score.actions';

@Injectable({
  providedIn: 'root'
})
/**
 * Local store that contains the score state.
 */
export class ScoreStore {
  score$: Observable<number>;
  private scoreSubject: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    this.score$ = this.scoreSubject;
  }

  dispatch(action: string) {
    switch (action) {
      case ScoreActions.INCREMENT_SCORE:
        this.increment();
        break;
    }
  }

  private increment() {
    this.scoreSubject.next(this.scoreSubject.value + 1);
  }


}