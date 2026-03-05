import { Component } from '@angular/core';

@Component({
  selector: 'app-promise-component',
  imports: [],
  template: `
    <h2>Lookup Pokemon</h2>
    <button (click)="fetchPokemon()">Fetch Pokemon</button>

     <!-- Display the Pokemon Name when it becomes available -->
    @if (pokemonName) {
      <p>Found: {{ pokemonName }}</p>
    } 

    <!-- Display an error message instead -->
    @if (errorMessage) {
      <p>{{ errorMessage }}</p>
    }
  `,
  styleUrl: './promise-component.css',
})
export class PromiseComponent {
  pokemonName: string = '';
  errorMessage: string = '';

  // The keyword async is used to perform Asynchronous operations.
  // When used with a function, the function becomes an asynchronous function
  async fetchPokemon() {
    try {
      // The fetch API attempts to ping this API endpoint and will return a promise at some time

      // the keyword 'await' can only be used with an Asynchronous function
      // The 'await' keyword allows other synchronous code to continue, while an async operations is being performed
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

      // The 'await' here waits until the response is populated and can provide us with the json() data
      const data = await response.json();

      // here we assign the value the we got from the json body into our variable
      this.pokemonName = data.name;
    } catch (error) {
      this.errorMessage = 'Failed to catch Pokemon';
    }
  }
}
