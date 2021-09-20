import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from './credit-card-model';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  private endpoint = "http://localhost:3000/"

  constructor(private httpClient: HttpClient) { }

  get(): Observable<CreditCard[]> {
    return this.httpClient.get<CreditCard[]>(this.endpoint + "credit_cards")
  }
}
