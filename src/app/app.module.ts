import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardModule } from './credit-card/credit-card-module';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionOverviewComponent } from './transaction/transaction-overview/transaction-overview.component';
import { TransactionModule } from './transaction/transaction.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavigationBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreditCardModule,
    BrowserAnimationsModule,
    TransactionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
