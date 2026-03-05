/**
 * This Component represents the Producer for the Pub/Sub example. The
 * event (button click) adds new data (updates the cart count) in our
 * CartService - Then subscribers to this cartCount (nav-bar component)
 * can respond appropriately
 */
import { Component, inject } from '@angular/core';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-product',
  imports: [],
  template: `
  <div>
    <h3>Some Product</h3>
    <p>price: $10.00</p>
    <button (click)="addProductToCart()">Add to Cart</button>
  </div>
  `,
  styleUrl: './product.css',
})
export class Product {
  private cartService = inject(CartService);

  addProductToCart() {
    this.cartService.addToCart();
  }
}
