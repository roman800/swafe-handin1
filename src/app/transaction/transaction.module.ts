import { NgModule } from '@angular/core';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TransactionAddComponent,
    TransactionOverviewComponent,
    TransactionListComponent,
  ],
  imports: [SharedModule],
  exports: [TransactionOverviewComponent],
})
export class TransactionModule {}
