import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Response } from 'src/interfaces/article';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import config from '../config';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  baseUrl = `https://newsapi.org/v2/top-headlines?apiKey=${config.api.key}&country=id`;

  constructor(private http: HttpClient) { }

  getFromAllCategories(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl)
                    .pipe(
                      retry(3),
                      catchError(this.handleError)
                    );
  }

  getFromBusinessCategory(): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}&category=business`)
                    .pipe(
                      retry(3),
                      catchError(this.handleError)
                    );
  }

  getFromEntertainmentCategory(): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}&category=entertainment`)
                    .pipe(
                      retry(3),
                      catchError(this.handleError)
                    );
  }

  getFromHealthCategory(): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}&category=health`)
                    .pipe(
                      retry(3),
                      catchError(this.handleError)
                    );
  }

  getFromScienceCategory(): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}&category=science`)
                    .pipe(
                      retry(3),
                      catchError(this.handleError)
                    );
  }

  getFromSportsCategory(): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}&category=sports`)
                    .pipe(
                      retry(3),
                      catchError(this.handleError)
                    );
  }

  handleError(error: HttpErrorResponse) {
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
