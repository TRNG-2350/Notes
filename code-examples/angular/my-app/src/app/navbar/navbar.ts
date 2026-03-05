/**
 * This component represents our subscriber in the Pub/Sub
 * Example. It listens for changes in data to our CartService 
 * (which represents the data channel), and reactively udpates the
 * count of items in our template.
 */
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { CartService } from '../cart-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
  <nav><h1>My Store</h1>
  <span>Cart: {{cartCount}} items</span></nav>
  `,
  styleUrl: './navbar.css',
})
export class Navbar {
  // injected service
  private cartService = inject(CartService);

  // subscription is used so we can subscribe to events
  private subscription = new Subscription();

  cartCount : number = 0;

  // When the component is created we want to subscribe to the event
  // remember that the 'cartCount$' is a value that we must subscribe to
  // the '$' is a convention used to notate values which should
  // be subscribed to
  ngOnInit() {
    const sub = this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });

    this.subscription.add(sub);
  }

  // We want to remember to unsubscribe in our ngOnDestroy
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
