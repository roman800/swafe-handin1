import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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
    return this.httpClient.get<CreditCard[]>(this.endpoint);
  }
  post(creditCard: CreditCard): Observable<CreditCard> {
    return this.httpClient
      .post<CreditCard>(this.endpoint, creditCard, this.httpOptions)
      .pipe(
        tap((creditCard) => console.log('added:' + creditCard)),
        catchError(this.handleError<CreditCard>('Post credit card'))
      );
  }

  delete(credit_card_id: number): Observable<DeleteMessage> {
    return this.httpClient
      .delete<DeleteMessage>(this.endpoint + credit_card_id, this.httpOptions)
      .pipe(
        tap((message) => console.log(message.message + 'on: ' + message.date)),
        catchError(this.handleError<DeleteMessage>('Delete Credit card'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
