import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions?: Transaction[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService.get().subscribe(transactions => this.transactions = transactions);
  }

  deleteTransaction(uid: string) {
    this.transactionService.delete(uid).subscribe(response => alert(response.message));
    this.transactions = this.transactions?.filter(transaction => transaction.uid !== uid);
  }
}
