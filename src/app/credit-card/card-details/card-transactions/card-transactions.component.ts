import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionListService } from 'src/app/transaction/transaction-list.service';
import { Transaction } from 'src/app/transaction/transaction.model';

@Component({
  selector: 'app-card-transactions',
  templateUrl: './card-transactions.component.html',
  styleUrls: ['./card-transactions.component.scss'],
})
export class CardTransactionsComponent implements OnInit {
  @Input() cardNumber!: number;

  transactions$?: Observable<Transaction[]>;

  constructor(private transactionListService: TransactionListService) {}

  ngOnInit(): void {
    this.transactions$ = this.transactionListService.getFilteredTransaction(
      this.cardNumber
    );
  }

  onDelete(uid: string) {
    this.transactionListService.deleteTransaction(uid);
  }
}
