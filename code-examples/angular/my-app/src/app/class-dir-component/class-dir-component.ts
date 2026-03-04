/*
This component is used to showcase the use of the NgClass directive, 
which allows us to conditionally apply CSS classes to an element based 
on the value of a property in our component.
 */
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-class-dir-component',
  imports: [NgClass],
  templateUrl: './class-dir-component.html',
  styleUrl: './class-dir-component.css',
})
export class ClassDirComponent {
  isSpecial: boolean = true;
}
