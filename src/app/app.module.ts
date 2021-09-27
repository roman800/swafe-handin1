import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardModule } from './credit-card/credit-card-module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TransactionModule } from './transaction/transaction.module';
import { CardDetailsComponent } from './credit-card/card-details/card-details.component';

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, CardDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CreditCardModule,
    TransactionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
