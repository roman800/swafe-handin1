import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Transaction } from '../transaction.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss'],
})
export class TransactionListItemComponent implements OnInit {
  @Input() transaction!: Transaction;
  @Output() deleteTransactionEvent = new EventEmitter<string>();
  date!: Date;
  constructor() { }

  ngOnInit(): void {
    this.date = new Date(this.transaction.date);
  }
  onClick(): void {
    this.deleteTransactionEvent.emit(this.transaction.uid);
  }
}
