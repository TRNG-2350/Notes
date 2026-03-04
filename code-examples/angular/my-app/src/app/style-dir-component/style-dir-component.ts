/**
 * This component is used to showcase the use of the NgStyle directive,
 * which allows us to conditionally apply inline styles to an element based
 * on the value of a property in our component.
 */
import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-style-dir-component',
  imports: [NgStyle],
  template: `
    <h1 [ngStyle]="currentStyles">This is my Style Directive Component</h1>
  `,
  styleUrl: './style-dir-component.css',
})
export class StyleDirComponent {
  // The 'Record' is a built-in TypeScript utility type that constructs an object type whose keys are of a specific type and values are of another type. In this case, it creates an object where the keys are strings (representing CSS property names) and the values are also strings (representing CSS property values).
  currentStyles: Record<string, string> = {
    'font-size':'24px',
    'font-family':'Arial',
    'color':'blue',
    'font-style':'italic'
  }
}
