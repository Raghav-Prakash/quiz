import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, concatMapTo, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loader$: Observable<boolean>;
  private loaderSubject = new BehaviorSubject(false);

  constructor() {
    this.loader$ = this.loaderSubject;
  }

  showLoaderUntilComplete<T>(obs$: Observable<T>): Observable<T> {
    return of(1).pipe(
      tap(() => this.loaderSubject.next(true)),
      concatMapTo(obs$),
      finalize(() => this.loaderSubject.next(false))
    );
  }
}
