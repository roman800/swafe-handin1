import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardAddComponent } from './credit-card-add/credit-card-add.component';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardListItemComponent } from './credit-card-list-item/credit-card-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ControlErrorPipe } from './control-error.pipe';

@NgModule({
  declarations: [
    CreditCardAddComponent,
    CreditCardListComponent,
    CreditCardListItemComponent,
    ControlErrorPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [CreditCardAddComponent, CreditCardListComponent],
})
export class CreditCardModule {}
