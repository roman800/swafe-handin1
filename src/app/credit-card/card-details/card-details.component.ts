import { Component, OnInit } from '@angular/core';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material/select/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, mergeAll } from 'rxjs/operators';
import { CreditCard } from '../credit-card-model';
import { CreditCardService } from '../credit-card-service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  creditCard$!: Observable<CreditCard>;

  constructor(
    private creditCardService: CreditCardService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(map((map) => map.get('id')))
      .subscribe((routeId) => {
        this.creditCard$ = this.creditCardService.get().pipe(
          mergeAll(),
          filter((c) => c.card_number === Number(routeId))
        );
      });
  }

  delete() {
    this.creditCard$.subscribe(async card => {
      await this.creditCardService.delete(card.card_number).subscribe(card => console.log(card.message))
      this.router.navigate(['/credit-cards'])
    }
    );

  }
}
