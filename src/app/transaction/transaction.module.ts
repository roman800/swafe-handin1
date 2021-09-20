import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './transaction-list-item/transaction-list-item.component';



@NgModule({
  declarations: [
    TransactionAddComponent,
    TransactionOverviewComponent,
    TransactionListComponent,
    TransactionListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
