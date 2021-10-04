import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/credit-card/credit-card-model';
import { CreditCardService } from 'src/app/credit-card/credit-card-service';
import { Transaction } from '../transaction.model';
import { TransactionListService } from '../transaction-list.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent {
  transactions$: Observable<Transaction[]> =
    this.transactionService.allTransactions$;
  creditCards$: Observable<CreditCard[]> = this.creditCardService.get();

  filter?: MatSelectChange;

  constructor(
    private transactionService: TransactionListService,
    private creditCardService: CreditCardService,
    private snackbar: MatSnackBar
  ) {}

  onDelete(uid: string) {
    this.transactionService.deleteTransaction(uid).subscribe((response) => {
      // Show response with snackbar
      this.snackbar.open(response.message, '', {
        panelClass: 'snackSuccess',
        duration: 3000,
      });
    });
  }

  filterChange(selectedOption: MatSelectChange) {
    // Save applied filter
    this.filter = selectedOption;

    this.transactions$ = this.transactionService.getFilteredTransaction(
      selectedOption.value as number
    );
    this.transactionService
      .getFilteredTransaction(selectedOption.value as number)
      .subscribe((list) => {
        console.log(list);
      });
  }
  clearFilters() {
    this.filter = undefined;
    this.transactions$ = this.transactionService.allTransactions$;
  }
}
