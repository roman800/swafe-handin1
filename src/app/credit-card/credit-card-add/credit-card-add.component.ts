import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCard } from '../credit-card-model';
import { CreditCardService } from '../credit-card-service';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.css']
})
export class CreditCardAddComponent implements OnInit {
  creditCardForm!: FormGroup

  constructor(private formBuild: FormBuilder, private creditCardService: CreditCardService) {
    this.formInit();
  }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(this.creditCardForm.value);
    this.creditCardService.post(this.creditCardForm.value as CreditCard).subscribe()
  }

  private formInit() {
    this.creditCardForm = this.formBuild.group(
      {
        card_number: [null, [Validators.min(1), Validators.max(9999999999999999), Validators.required]],
        csc_code: [null, [Validators.min(1), Validators.max(999), Validators.required]],
        cardholder_name: ["", Validators.required],
        expiration_date_month: [null, [Validators.min(1), Validators.max(12), Validators.required]],
        expiration_date_year: [null, [Validators.min(1), Validators.max(31), Validators.required]],
        issuer: ""
      }
    )
  }

}
