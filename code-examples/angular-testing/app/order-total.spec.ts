import { TestBed } from '@angular/core/testing';
import { Mocked } from 'vitest';
import { OrderTotal } from './order-total';
import { TaxCalculator } from './tax-calculator';

// technically this is a sub, because it is mocking functionality, not the 
// structure of an object
const taxCalculatorMock: Mocked<TaxCalculator> = {
  calculate: vi.fn(),
};

describe('OrderTotal', () => {
  let service: OrderTotal;

  beforeEach(() => {

    taxCalculatorMock.calculate.mockReturnValue(5);

    TestBed.configureTestingModule({
      // this 'providers' array actually overrides the provider for TaxCalculator, 
      // so that when OrderTotal attempts injection, it gets the mock instead
      providers: [ { provide: TaxCalculator, useValue: taxCalculatorMock }, ],
    });


    service = TestBed.inject(OrderTotal);
  });

  it('add tax to the subtotal', () => {
    const result = service.total(100);
    expect(result).toBe(105);
  });
});
