import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  // Imagine that this code is replaced with calls to an API, for instance
  getEmployees() : Array<{id: number, name: string, age: number}> {
    return [
      {id: 1, name: 'Abraham Lincoln', age: 30},
      {id: 2, name: 'Brian Johnson', age: 25},
      {id: 3, name: 'Chris Evans', age: 40},
    ]
  }
}
