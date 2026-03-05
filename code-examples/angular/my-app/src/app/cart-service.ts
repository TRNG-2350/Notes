/**
 * This is our Observable for showcasing how the Pub/Sub
 * pattern works in Angular. This is our 'channel' that will
 * allow subscribers to listen for events and react accordingly 
 * when those events are emitted.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCount = new BehaviorSubject<number> (0);

  // It is a convention that we use the $ suffix to indicate 
  // that this variable is an Observable -  the '$' basically means
  // "you need to subscribe to this"
  cartCount$ = this.cartCount.asObservable();

  // This function will increment our cart count by 1 every time it is called
  // the 'next' method is used to update the value of the BehaviorSubject,
  // and 'getValue' is used to retrieve the current value of the cart count
  addToCart() {
    this.cartCount.next(this.cartCount.getValue() + 1);
  }

  removeFromCart() {
    const currentCount = this.cartCount.getValue();
    if (currentCount > 0) {
      this.cartCount.next(currentCount - 1);
    }
  }

}
