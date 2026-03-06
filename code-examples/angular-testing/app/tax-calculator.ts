import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculator {
  calculate(subtotal: number): number {
    return subtotal * 0.05;
  }
}
