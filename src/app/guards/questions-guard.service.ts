import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { QuestionsStore } from 'src/app/store/questions.store';

@Injectable({
  providedIn: 'root'
})
export class QuestionsGuardService implements CanActivate {

  constructor(
    private questionsStore: QuestionsStore,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.questionsStore.questions$.pipe(
      switchMap(questions => {
        if (questions.length === 0) {
          this.router.navigate(['']);
        }
        return of(questions.length > 0);
      })
    );
  }
}
