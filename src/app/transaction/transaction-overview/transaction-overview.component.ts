import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction.model';
import { TransactionAPIService } from '../transaction.api.service';

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.scss'],
})
export class TransactionOverviewComponent implements OnInit {
  transactions?: Transaction[];
  transaction?: Transaction;
  constructor(private transactionService: TransactionAPIService) {}

  ngOnInit(): void {
    this.transactionService.get().subscribe((transactions) => {
      this.transactions = transactions;
      this.transaction = transactions.pop();
    });
  }
}
