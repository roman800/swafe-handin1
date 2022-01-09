import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreditCardAddComponent } from './credit-card/credit-card-add/credit-card-add.component';

@Injectable({
  providedIn: 'root',
})
export class UnsavedChangesGuard
  implements CanDeactivate<CreditCardAddComponent>
{
  canDeactivate(component: CreditCardAddComponent) {
    if (component.creditCardForm.dirty) {
      return window.confirm('You have unsaved changes. Still want to leave?');
    } else {
      return true;
    }
  }
}
