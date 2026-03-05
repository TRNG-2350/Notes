/**
 * This component showcases the AsyncSubject in Angular
 * 
 * We did NOT examine this code during lecture
 * 
 * Remember that an AsyncSubject is a varient type of Subject
 * which will emit the last known value to late subscribers as
 * well as any emissions after subscription, but ONLY
 * after the async operation completes.
 * 
 * When you view this component in your app, click on each
 * calculate button a few times before clicking on then 'Subscribe Late'
 * then 'complete' button to show has the messages are emitted.
 */
import { Component, signal } from '@angular/core';
import { AsyncSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-async-subject-component',
  imports: [],
  template: `
    <h2>AsyncSubject - Calculation</h2>
    <button (click)="calculate(10)">Emit: 10</button>
    <button (click)="calculate(20)">Emit: 20</button>
    <button (click)="calculate(30)">Emit: 30</button>
    <button (click)="complete()">Complete</button>
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
  styleUrl: './async-subject-component.css',
})
export class AsyncSubjectComponent {
  mainLog = signal<string[]>([]);
  lateLog = signal<string[]>([]);

  private calculation$ = new AsyncSubject<number>();
  private subscription = new Subscription();

  constructor() {
    // Main subscriber - note it receives nothing until complete() is called
    const sub = this.calculation$.subscribe({
      next: (value) => {
        this.mainLog.update(log => [
          ...log,
          'Main subscriber - Final result: ' + value
        ]);
      },
      complete: () => {
        this.mainLog.update(log => [...log, 'Main subscriber - done!']);
      }
    });
    this.subscription.add(sub);
  }

  calculate(value: number) {
    this.calculation$.next(value);
    this.mainLog.update(log => [
      ...log, 
      'Emitted: ' + value + ' (waiting for complete...)'
    ]);
  }

  complete() {
    // Only NOW does the last emitted value get sent to subscribers
    this.calculation$.complete();
  }

  subscribeLate() {
    // Even a late subscriber gets the final value if complete() was already called
    const sub = this.calculation$.subscribe({
      next: (value) => {
        this.lateLog.update(log => [
          ...log,
          'Late subscriber - Final result: ' + value
        ]);
      },
      complete: () => {
        this.lateLog.update(log => [...log, 'Late subscriber - done!']);
      }
    });
    this.subscription.add(sub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}