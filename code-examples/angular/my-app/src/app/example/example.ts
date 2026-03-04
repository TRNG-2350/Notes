import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  imports: [FormsModule],
  templateUrl: './example.html',
  styleUrl: './example.css',
})
export class Example {
  my_name : string = "Baar";

  num : number = 100;

  imageUrl : string = 'https://angular.io/assets/images/logos/angular/angular.png';

  name = "Joseph"
  age= 36
  id = 123

  message: string = ''
  count: number = 0;
  countClicks() {
    this.count++;
    this.message=`You clicked the button ${ this.count }, times`
  }

  input: string = '';
}
