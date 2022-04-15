import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AttemptCountActions } from 'src/app/store/actions/attempt-count.actions';

@Injectable({
  providedIn: 'root'
})
export class AttemptCountStore {

  attemptCount$: Observable<number>;
  attemptCountSubject: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    this.attemptCount$ = this.attemptCountSubject;
  }

  dispatch(action: string) {
    switch (action) {
      case AttemptCountActions.INCREMENT_ATTEMPT:
        this.incrementAttemptCount();
        break;
    }
  }

  private incrementAttemptCount() {
    this.attemptCountSubject.next(this.attemptCountSubject.value + 1);
  }
}
