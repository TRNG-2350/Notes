/*
  This component was created to demonstrate the use of the Angular CLI to generate a new component.
  Remember that the Command to create a new component is:
  ng generate component <component-name>
  shorthand: ng g c <component-name>
*/
import { Component } from '@angular/core';
import { Example } from '../example/example';

@Component({
  selector: 'app-second',
  imports: [Example],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second {
  ex : Example = new Example();

  constructor() {
    this.ex.my_name = "Baar";
  }

  ChangeMyName(new_name: string) {
    this.ex.my_name = new_name;
  }
}