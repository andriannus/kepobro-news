import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Article, Response } from '@app/shared/consts/model.const';
import { AUTH } from '@app/shared/consts/auth.const';
import { API } from '@env/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  public baseUrl = `${API.URL}?apiKey=${AUTH.KEY}&country=id`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public fetchNewsData(category?: string): Observable<Response> {
    const url = category === undefined ? this.baseUrl : `${this.baseUrl}&category=${category}`;

    return this.http.get<Response>(url)
                    .pipe(
                      retry(3),
                      catchError(this.handleError)
                    );
  }

  public readArticle(article: Article): void {
    localStorage.setItem('article', JSON.stringify(article));

    this.router.navigateByUrl('/read');
  }

  public handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: `, error.error.message);
    } else {
      console.error(
        `News API returned code ${error.status}` +
        `body was: ${error.error}`
      );
    }

    return throwError(
      'Something bad happened; please try again alter.'
    );
  }

}
