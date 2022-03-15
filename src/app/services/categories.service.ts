import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from 'src/app/models/category';
import { ApiCategories } from 'src/app/services/models/categories';
import { CATEGORIES_URL} from 'src/app/urls/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<ApiCategories>(CATEGORIES_URL).pipe(
      map(apiCategories => apiCategories.trivia_categories)
    );
  }
}
