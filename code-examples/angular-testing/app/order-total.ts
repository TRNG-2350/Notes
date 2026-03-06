import { Injectable, inject } from '@angular/core';
import { TaxCalculator } from './tax-calculator';

@Injectable({
  providedIn: 'root',
})
export class OrderTotal {
  private taxCalculator = inject(TaxCalculator);
  total(subtotal: number): number {
    return subtotal + this.taxCalculator.calculate(subtotal);
  }
}
