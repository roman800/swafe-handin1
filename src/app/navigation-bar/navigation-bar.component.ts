import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

export type NavRoute = 'credit-cards' | 'add-card' | 'transaction-screen';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  currentRoute?: NavRoute;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inpiration: https://stackoverflow.com/questions/43360625/what-is-the-easiest-way-to-get-current-route-path-name-in-angular
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url.slice(
          event.url.indexOf('/') + 1
        ) as NavRoute;
      }
    });
  }
}
