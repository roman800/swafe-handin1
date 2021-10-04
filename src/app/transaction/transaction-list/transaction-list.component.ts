import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { merge, Observable } from 'rxjs';
import { filter, map, mergeAll, toArray } from 'rxjs/operators';
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
  transactions$: Observable<Transaction[]> = this.transactionService.get();
  creditCards$: Observable<CreditCard[]> = this.creditCardService.get();

  constructor(
    private transactionService: TransactionService,
    private creditCardService: CreditCardService,
    private snackbar: MatSnackBar
  ) {}

  onDelete(uid: string) {
    this.transactionService.delete(uid).subscribe((response) => {
      // Show response with snackbar
      this.snackbar.open(response.message, '', {
        panelClass: 'snackSuccess',
        duration: 3000,
      });

      // Update shown list
      this.transactions$ = this.transactionService.get();
    });
  }

  filterChange(selectedOption: MatSelectChange) {
    this.transactions$ = this.transactionService.get().pipe(
      mergeAll(),
      filter(
        (transaction) =>
          transaction.credit_card.card_number ===
          (selectedOption.value as number)
      ),
      toArray()
    );
  }
}
