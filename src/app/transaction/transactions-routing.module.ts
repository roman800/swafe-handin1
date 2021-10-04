import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';

export const navigationRoutes: Routes = [
  {
    path: '**',
    component: TransactionOverviewComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(navigationRoutes)],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}
