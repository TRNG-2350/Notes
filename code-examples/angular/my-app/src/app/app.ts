import { Component, signal } from '@angular/core';
import {EmployeePortal } from './employee-portal/employee-portal'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeePortal],
  template: `
   <!-- This is our Root App Component -->
   <!-- import and reference the selector of any other component you want to display in this template -->
    <app-employee-portal></app-employee-portal>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
