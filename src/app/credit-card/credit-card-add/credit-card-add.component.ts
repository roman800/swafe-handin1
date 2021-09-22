import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreditCard } from '../credit-card-model';
import { CreditCardService } from '../credit-card-service';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.scss'],
})
export class CreditCardAddComponent implements OnInit {
  creditCardForm!: FormGroup;
  showErrors: boolean = false;

  constructor(
    private formBuild: FormBuilder,
    private creditCardService: CreditCardService,
    private snackBar: MatSnackBar
  ) {
    this.formInit();
  }

  ngOnInit(): void {}

  onClick(): void {
    // Check form validation
    if (this.creditCardForm?.valid) {
      // Form was valid, create card
      try {
        this.creditCardService
          .post(this.creditCardForm.value as CreditCard)
          .subscribe((card) => {
            this.snackBar.open('Successfully registered card ✅', '', {
              duration: 3000,
              panelClass: 'snackSuccess',
            });
          });
      } catch (err) {
        this.snackBar.open('Error registering card.. ', '', {
          duration: 3000,
          panelClass: 'snackError',
        });
      }
    } else {
      // Form was invalid, show errors
      this.showErrors = true;
    }
  }

  private formInit() {
    this.creditCardForm = this.formBuild.group({
      card_number: [
        null,
        [
          Validators.min(1),
          Validators.max(9999999999999999),
          Validators.required,
        ],
      ],
      csc_code: [
        null,
        [Validators.min(1), Validators.max(999), Validators.required],
      ],
      cardholder_name: ['', Validators.required],
      expiration_date_month: [
        null,
        [Validators.min(1), Validators.max(12), Validators.required],
      ],
      expiration_date_year: [
        null,
        [Validators.min(1), Validators.max(31), Validators.required],
      ],
      issuer: '',
    });
  }

  get c(): {
    [key: string]: AbstractControl;
  } {
    return this.creditCardForm.controls;
  }
}
