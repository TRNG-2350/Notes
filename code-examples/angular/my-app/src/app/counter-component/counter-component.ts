/*
  This component is used to showcase Signals, Computed Signals, and Effects in Angular
 */
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  template: `
  <h2>This is my Counter Component</h2>
  <p>Count: {{ count() }}</p>
  <p>Double: {{ double() }}</p>
  <button (click)="increment()">Increment [+]</button>
  <button (click)="decrement()">Decrement [-]</button>
  `,
  styleUrl: './counter-component.css',
})
export class CounterComponent {
  // This is a 'normal' signal - it is a writable signal
  count = signal(0);

  // This variable is a computed signal. Computed signals are read-only.
  // it's value is derived from other signals. In this case, it's value is always double the value of 'count'
  double = computed(
    () => this.count() * 2
  );

  constructor() {
    // This is an effect signal - effects are used to perform 'side-effect' operations (such as logging)
    effect(() => console.log(`Count is: ${this.count()}`));
  }

  increment() {
    // The update function on our signal is changing its value (+1)
    this.count.update((c) => c + 1);
  }

  decrement() {
      // The update function on our signal is changing its value (-1)
    this.count.update((c) => c - 1);
  }
}
