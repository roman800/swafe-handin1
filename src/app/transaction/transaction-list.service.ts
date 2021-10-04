import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { TransactionAPIService } from './transaction.api.service';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionListService {
  transactions$: ReplaySubject<Transaction[]> = new ReplaySubject(1);

  constructor(private transactionAPIService: TransactionAPIService) {
    this.transactions$.next([]);
    this.refetchList();
  }

  get allTransactions$(): Observable<Transaction[]> {
    return this.transactions$.asObservable();
  }

  getFilteredTransaction(cardNumber: number): Observable<Transaction[]> {
    return this.transactions$
      .asObservable()
      .pipe(
        map((list) =>
          list.filter(
            (transaction) => transaction.credit_card.card_number === cardNumber
          )
        )
      );
  }

  addTransaction(transaction: Transaction) {
    // Add transaction
    return (
      this.transactionAPIService
        .post(transaction)
        // Refetch list
        .pipe(tap(() => this.refetchList()))
    );
  }

  deleteTransaction(uid: string) {
    // Delete transaction
    return (
      this.transactionAPIService
        .delete(uid)
        // Refetch list
        .pipe(tap(() => this.refetchList()))
    );
  }

  refetchList() {
    // Fetch new list of transactions
    this.transactionAPIService.get().subscribe((transactions) => {
      // Emit new list to subscriber
      this.transactions$.next(transactions);
    });
  }
}
