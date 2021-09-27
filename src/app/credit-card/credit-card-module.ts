import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardAddComponent } from './credit-card-add/credit-card-add.component';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardListItemComponent } from './credit-card-list-item/credit-card-list-item.component';
import { ControlErrorPipe } from './control-error.pipe';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    CreditCardAddComponent,
    CreditCardListComponent,
    CreditCardListItemComponent,
    ControlErrorPipe,
  ],
  imports: [CommonModule, HttpClientModule, SharedModule, RouterModule],
  exports: [CreditCardAddComponent, CreditCardListComponent],
})
export class CreditCardModule {}
