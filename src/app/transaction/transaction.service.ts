import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { DeleteMessage } from './deleteResponse.model';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private endpoint = "http://localhost:3000/transactions/"

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }



  constructor(private httpClient: HttpClient) { }

  get(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.endpoint)
  }
  post(transaction: Transaction): Observable<Transaction> {

    return this.httpClient.post<Transaction>(this.endpoint, transaction, this.httpOptions).pipe(
      tap(transaction => console.log("added:" + transaction)),
      catchError(this.handleError<Transaction>('Post Transaction'))
    )
  }
  delete(uid: string): Observable<DeleteMessage> {

    return this.httpClient.delete<DeleteMessage>(this.endpoint + uid, this.httpOptions).pipe(
      tap(uid => console.log("deleted:" + uid)),
      catchError(this.handleError<DeleteMessage>('Transaction delete'))
    )
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
