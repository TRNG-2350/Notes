import { Component, signal } from '@angular/core';
import { interval, Subscription, map } from 'rxjs';


@Component({
  selector: 'app-observable-component',
  imports: [],
  template: `
    <h2>Counter - look at the timer below</h2>
    <p>Time Elapsed: {{ seconds() }} seconds</p>
    <button (click)="stop()">Stop Counter</button>
  `,
  styleUrl: './observable-component.css',
})
export class ObservableComponent {
  seconds = signal<number> (0);
  private subscription = new Subscription();

  // Recall that ngOnInit() is one of our component lifecycle hooks
  // we want to subscribe to some observable when the component is initialized
  ngOnInit() {
    const timer$ = interval(1000).pipe(
      map(value => value+1)
    );

    const sub = timer$.subscribe(value => {
      this.seconds.set(value);
      console.log('tick', value);
    });

    this.subscription.add(sub);
  }

  stop() {
    // Note, you can unsubscribe with a function call as well - Promises don't allow for this!
    this.subscription.unsubscribe();
  }

  // Remember to unsubscribe to prevent memory leaks!
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
