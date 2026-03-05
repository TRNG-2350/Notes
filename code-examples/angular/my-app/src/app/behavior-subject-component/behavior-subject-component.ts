/**
 * This component showcases a Behavior Subject in Angular
 * 
 * We did NOT examine this code during Lecture
 * 
 * Remember that a BehaviorSubject is a variant type of Subject 
 * which will emit the last known value to late subscribers
 * 
 * When you view this component in your app click 'login' and 'logout' 
 * a few times, then click on 'subscribe late' to see the value it is given
 */
import { Component, signal } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-behavior-subject-component',
  imports: [],
  template: `
    <h2>BehaviorSubject - Login Status</h2>
    <button (click)="login()">Login</button>
    <button (click)="logout()">Logout</button>
    <button (click)="subscribeLate()">Subscribe Late</button>

    <h3>Main Log:</h3>
    @for (msg of mainLog(); track msg) {
      <p>{{ msg }}</p>
    }

    <h3>Late Subscriber Log:</h3>
    @for (msg of lateLog(); track msg) {
      <p>{{ msg }}</p>
    }
  `,
  styleUrl: './behavior-subject-component.css',
})
export class BehaviorSubjectComponent {
  mainLog = signal<string[]>([]);
  lateLog = signal<string[]>([]);

  // BehaviorSubject requires an initial value
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private subscription = new Subscription();

  constructor() {
    // Main subscriber - always listening
    const sub = this.isLoggedIn$.subscribe(value => {
      this.mainLog.update(log => [
        ...log,
        'Main subscriber - Logged in: ' + value
      ]);
    });
    this.subscription.add(sub);
  }

  // produce a new value for the BehaviorSubject - a boolean true
  login() {
    this.isLoggedIn$.next(true);
  }

  // produce a new value for the BehaviorSubject - a boolean false
  logout() {
    this.isLoggedIn$.next(false);
  }

  subscribeLate() {
    // Late subscriber immediately receives the current value
    const sub = this.isLoggedIn$.subscribe(value => {
      this.lateLog.update(log => [
        ...log,
        'Late subscriber - Logged in: ' + value
      ]);
    });
    this.subscription.add(sub);
    this.lateLog.update(log => [
      ...log, 
      'Late subscriber just subscribed - got current value immediately above!'
    ]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}