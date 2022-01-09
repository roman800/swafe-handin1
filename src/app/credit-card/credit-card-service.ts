import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, from, Observable, of } from 'rxjs';
import { catchError, map, retry, take, tap } from 'rxjs/operators';
import { DeleteMessage } from '../deleteResponse.model';
import { CreditCard } from './credit-card-model';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  private endpoint = 'http://localhost:3000/credit_cards/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  get(): Observable<CreditCard[]> {
    return this.httpClient.get<CreditCard[]>(this.endpoint).pipe(
      tap((_) => {
        if (Math.random() < 0.5) {
          const status = Math.random() < 0.5 ? 0 : 500;
          throw new HttpErrorResponse({
            status,
            statusText: 'Connection Error',
          });
        }
      }),
      catchError((err, caught) => this.categorizeError(err, caught))
    );
  }

  post(creditCard: CreditCard): Observable<CreditCard> {
    return this.httpClient
      .post<CreditCard>(this.endpoint, creditCard, this.httpOptions)
      .pipe(tap((creditCard) => console.log('added:' + creditCard)));
  }

  delete(credit_card_id: number): Observable<DeleteMessage> {
    return this.httpClient
      .delete<DeleteMessage>(this.endpoint + credit_card_id, this.httpOptions)
      .pipe(
        tap((message) => console.log(message.message + 'on: ' + message.date))
      );
  }

  private categorizeError<T>(
    error: HttpErrorResponse,
    caught: Observable<T>
  ): Observable<T> {
    console.log('Handling error: ', error.message);
    if (error.status === 0) {
      // Frontend error
      throw 'Client connection error';
    } else {
      // Server error
      throw 'Server connection error';
    }
  }
}
