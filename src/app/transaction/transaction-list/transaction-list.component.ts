import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, mergeAll } from 'rxjs/operators';
import { CreditCard } from 'src/app/credit-card/credit-card-model';
import { CreditCardService } from 'src/app/credit-card/credit-card-service';
import { Transaction } from '../transaction.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent {
  transactions$?: Observable<Transaction[]> = this.transactionService.get();
  creditCards$?: Observable<CreditCard[]> = this.creditCardService.get();

  constructor(
    private transactionService: TransactionService,
    private creditCardService: CreditCardService
  ) {}

  deleteTransaction(uid: string) {
    this.transactionService
      .delete(uid)
      .subscribe((response) => console.log(response.message));
    this.transactions$ = this.transactionService.get();
  }
  filterChange() {}
}
