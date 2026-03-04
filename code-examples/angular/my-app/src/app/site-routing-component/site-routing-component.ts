/**
 * This component showcases our Angular Router. Note that this is the exact code
 * from our app.ts file shocased during lecture.
 */
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-routing-component',
  imports: [RouterOutlet, RouterLink],
  template: `
  <h1>This is my App-Root</h1>
  <header>
    <nav>
      <a routerLink="">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/contact">Contact</a>
      <a routerLink="/admin">Admin</a>
    </nav>
  </header>

  <!-- The Router Outlet tells Angular to load the Component related to the route (and it's children if any) here -->
  <router-outlet></router-outlet>

  <button (click)="makeAdmin()">Make Admin</button>
  <button (click)="disableAdmin()">Disable Admin</button>
  `,
  styleUrl: './site-routing-component.css',
})
export class SiteRoutingComponent {
  // Below are two utility functions I created just to support the Admin Guard example
  makeAdmin(): void {
    // setItem on localStorage allows us to create a key, and set the value of that key
    localStorage.setItem('isAdmin', 'true');
    alert('You are now an admin! Try navigating to the Admin page');
  }
  disableAdmin(): void {
    localStorage.setItem('isAdmin', 'false');
    alert('You are no longer an admin!');
  }
}
