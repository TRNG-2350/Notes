/**
 * This component showcases a ReplaySubject in Angular
 * 
 * We did NOT examine this code during lecture
 * 
 * Remember that a ReplaySubject is a variant type of Subject
 * which will emit the last 'n' values to new subscribers
 * where 'n' is a configured amount of emissions.
 * 
 * When you view this component in your app, click on each
 * of the message buttons (hello, how are you, etc...) some 
 * number of times, then click 'joinLate()' - you will see
 * the last 3 messages sent due to our configuration
 * 
 */
import { Component, signal } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject-component',
  imports: [],
  template: `
    <h2>ReplaySubject - Chat Messages</h2>
    <button (click)="sendMessage('Hello!')">Send: Hello!</button>
    <button (click)="sendMessage('How are you?')">Send: How are you?</button>
    <button (click)="sendMessage('Anyone there?')">Send: Anyone there?</button>
    <button (click)="sendMessage('Never mind!')">Send: Never mind!</button>
    <button (click)="joinLate()">Join Chat Late</button>

    <h3>Chat Log:</h3>
    @for (msg of chatLog(); track msg) {
      <p>{{ msg }}</p>
    }

    <h3>Late Joiner Log:</h3>
    @for (msg of lateLog(); track msg) {
      <p>{{ msg }}</p>
    }
  `,
  styleUrl: './replay-subject-component.css',
})
export class ReplaySubjectComponent {
  chatLog = signal<string[]>([]);
  lateLog = signal<string[]>([]);

  // Remembers the last 3 emitted values
  private chatMessages$ = new ReplaySubject<string>(3); // <-- configured with '3'
  private subscription = new Subscription();

  constructor() {
    const sub = this.chatMessages$.subscribe(msg => {
      this.chatLog.update(log => [...log, 'Chat: ' + msg]);
    });
    this.subscription.add(sub);
  }

  sendMessage(message: string) {
    this.chatMessages$.next(message);
  }

  joinLate() {
    // Late subscriber receives last 3 messages immediately
    const sub = this.chatMessages$.subscribe(msg => {
      this.lateLog.update(log => [...log, 'Late joiner received: ' + msg]);
    });
    this.subscription.add(sub);
    this.lateLog.update(log => [
      ...log,
      '--- joined chat, replaying last 3 messages above ---'
    ]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
