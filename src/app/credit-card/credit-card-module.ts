import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardAddComponent } from './credit-card-add/credit-card-add.component';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardTransactionsComponent } from './card-details/card-transactions/card-transactions.component';
@NgModule({
  declarations: [
    CreditCardAddComponent,
    CreditCardListComponent,
    CardDetailsComponent,
    CardTransactionsComponent,
  ],
  imports: [CommonModule, HttpClientModule, SharedModule, RouterModule],
  exports: [CreditCardAddComponent, CreditCardListComponent],
})
export class CreditCardModule {}
