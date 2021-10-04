import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CreditCard } from 'src/app/credit-card/credit-card-model';
import { CreditCardService } from 'src/app/credit-card/credit-card-service';
import { TransactionListService } from '../transaction-list.service';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss'],
})
export class TransactionAddComponent {
  creditCards$: Observable<CreditCard[]> = this.creditCardService.get();
  transactionForm!: FormGroup;
  showErrors: boolean = false;

  constructor(
    private formBuild: FormBuilder,
    private creditCardService: CreditCardService,
    private transactionService: TransactionListService,
    private snackBar: MatSnackBar
  ) {
    this.transactionForm = this.formBuild.group({
      credit_card: [undefined, [Validators.required]],
      date: [undefined, [Validators.required]],
      currency: ['dkk', [Validators.required]],
      amount: [1, [Validators.required, Validators.min(1)]],
      comment: [null],
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      // Create transaction
      this.creditCards$.subscribe((cards) => {
        const credit_card = cards.find(
          (card) => card.card_number === this.transactionForm.value.credit_card
        );

        this.transactionService
          .addTransaction({
            ...this.transactionForm.value,
            credit_card,
          })
          .subscribe(() => {
            this.snackBar.open('Successfully created transaction!', '', {
              panelClass: 'snackSuccess',
              duration: 3000,
            });
            // Reset form
            this.transactionForm.reset();
            this.showErrors = false;
          });
      });
    } else {
      // Form was invalid, show errors
      this.showErrors = true;
    }
  }

  get c(): { [key: string]: AbstractControl } {
    return this.transactionForm?.controls;
  }
}
