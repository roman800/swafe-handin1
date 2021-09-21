import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.css']
})
export class TransactionOverviewComponent implements OnInit {
  transactions?: Transaction[]
  transaction?: Transaction
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.get().subscribe(
      transactions => {
        this.transactions = transactions;
        this.transaction = this.transactions?.pop()
      });
  }

}
