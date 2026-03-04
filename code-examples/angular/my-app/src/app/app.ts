import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
   <!-- This is our Root App Component -->
   <!-- import and referenec the selector of any other component you want to display in this template -->
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
