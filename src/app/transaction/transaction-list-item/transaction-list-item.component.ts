import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss'],
})
export class TransactionListItemComponent implements OnInit {
  @Input() transaction!: Transaction;
  date!: Date;
  constructor() {}

  ngOnInit(): void {
    this.date = new Date(this.transaction.date);
  }
  onClick(): void {
    alert('TODO: missing server component for remove');
  }
}
