import { Component, OnInit } from '@angular/core';
import { CreditCard } from '../credit-card-model';
import { CreditCardService } from '../credit-card-service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.css']
})
export class CreditCardListComponent implements OnInit {
  cards?: CreditCard[]


  constructor(private creditCardService: CreditCardService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.creditCardService.get().subscribe(cards => this.cards = cards)
  }

}
