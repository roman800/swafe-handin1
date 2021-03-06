import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './credit-card/card-details/card-details.component';
import { CreditCardAddComponent } from './credit-card/credit-card-add/credit-card-add.component';
import { CreditCardListComponent } from './credit-card/credit-card-list/credit-card-list.component';
import { TransactionOverviewComponent } from './transaction/transaction-overview/transaction-overview.component';
import { UnsavedChangesGuard } from './unsaved-changes.guard';

export const navigationRoutes: Routes = [
  {
    path: 'credit-cards',
    component: CreditCardListComponent,
  },
  {
    path: 'credit-cards/:id',
    component: CardDetailsComponent,
  },
  {
    path: 'add-card',
    component: CreditCardAddComponent,
    canDeactivate: [UnsavedChangesGuard],
  },
  {
    path: 'transaction-screen',
    loadChildren: () =>
      import('./transaction/transaction.module').then(
        (m) => m.TransactionModule
      ),
  },
  { path: '**', redirectTo: 'credit-cards', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(navigationRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
