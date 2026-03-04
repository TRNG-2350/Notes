/**
 * This component is used to showcase built-in Pipes and Custom Pipes 'WordCountPipe'
 * See the 'word-count-pipe-pipe.ts' for the code of this pipe
 */
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCountPipePipe } from '../word-count-pipe-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-logger-component',
  imports: [CommonModule, WordCountPipePipe, FormsModule],
  template: `
  <h2>Last Logged in Time [No Pipes]</h2>
  <p>"Last Logged in time: {{ lastLoggedIn }}</p>

  <h2>Last Logged in Time [With Pipes]</h2>
  <!-- You can chain pipes - below we format the lastLoggedIn date - then change it to uppercase -->
  <p>"Last Logged in time : {{ lastLoggedIn | date:'fullDate' | uppercase }}</p>


  <h1>Custom Pipe - Word Count Pipe</h1>
  <input type="text" placeholder="Type something here..." [(ngModel)]="inputText">
  <p>Word Count: {{ inputText() | wordCountPipe }}</p>
  `,
  styleUrl: './data-logger-component.css',
})
export class DateLoggerComponent {
  lastLoggedIn: Date = new Date(2026, 0, 1);

  inputText = signal<string>('')
}
