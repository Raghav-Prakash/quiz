import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { QuestionsStore } from 'src/app/store/questions.store';
import { AttemptCountStore } from 'src/app/store/attempt-count.store';

@Injectable({
  providedIn: 'root'
})
export class QuestionsGuardService implements CanActivate {

  constructor(
    private questionsStore: QuestionsStore,
    private attemptCountStore: AttemptCountStore,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return combineLatest([this.questionsStore.questions$, this.attemptCountStore.attemptCount$]).pipe(
      switchMap(([questions, attemptCount]) => {
        if (questions.length === 0 || attemptCount > 0) {
          this.router.navigate(['']);
        }
        return of(questions.length > 0);
      })
    );
  }
}
