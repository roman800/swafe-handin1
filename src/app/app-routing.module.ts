import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardAddComponent } from './credit-card/credit-card-add/credit-card-add.component';
import { HomeComponent } from './home/home.component';
import { TransactionOverviewComponent } from './transaction/transaction-overview/transaction-overview.component';

export const navigationRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'add-card',
    component: CreditCardAddComponent,
  },
  {
    path: 'transaction-screen',
    component: TransactionOverviewComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(navigationRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
