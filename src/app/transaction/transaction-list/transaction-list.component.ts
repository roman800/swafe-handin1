import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CreditCard } from 'src/app/credit-card/credit-card-model';
import { CreditCardService } from 'src/app/credit-card/credit-card-service';
import { Transaction } from '../transaction.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  transactions$?: Observable<Transaction[]>;
  creditCards$?: Observable<CreditCard[]>;

  constructor(
    private transactionService: TransactionService,
    private creditCardService: CreditCardService
  ) {
    this.creditCards$ = this.creditCardService.get();
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactions$ = this.transactionService.get();
  }

  deleteTransaction(uid: string) {
    this.transactionService.delete(uid).subscribe(response => console.log(response.message));
    this.getTransactions();

  }
  filterChange() { }
}
