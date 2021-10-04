import { NgModule } from '@angular/core';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './transaction-list-item/transaction-list-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TransactionAddComponent,
    TransactionOverviewComponent,
    TransactionListComponent,
    TransactionListItemComponent,
  ],
  imports: [SharedModule],
  exports: [TransactionOverviewComponent],
})
export class TransactionModule {}
