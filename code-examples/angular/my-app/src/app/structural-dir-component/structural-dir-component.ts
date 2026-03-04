/**
 * This component is used to showcase the use of Structural Directives
 * which are used to conditionally add or remove elements from the DOM
 * based on the value of a property in our component.
 * 
 * Note that the syntax below uses the modern (Angular 20+) syntax
 * for structural directives, which differs from the use of the
 * *ngIf, *ngFor and *ngSwitch syntax used in previous versions of Angular.
 */
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir-component',
  imports: [],
  template: `
  <h1>This is my Structural Directive Component</h1>
  <h2>The 'if' Structural Directive</h2>
  @if (5>10) {
  <div> 5 if greater than 10</div>
  } @else {
    <div>10 is greater tan 5</div>
  }

  <h2>The 'for' Structural Directive</h2>
  <table>
    <tbody>
      @for (customer of customers; track $index) {
      <tr>
        <td>{{customer.id}}</td>
        <td>{{customer.name}}</td>
      </tr>
      }
    </tbody>
  </table>
  `,
  styleUrl: './structural-dir-component.css',
})
export class StructuralDirComponent {
  customers: Customer[] = [
    new Customer(1, 'Amy Adams'),
    new Customer(2, 'Bob Brown'),
    new Customer(3, 'Charlie Chaplin'),
  ]

  num = signal<string>('')
}
class Customer {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
