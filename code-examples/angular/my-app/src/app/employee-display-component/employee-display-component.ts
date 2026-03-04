/*
  This component is used to showcase Injection along with the EmployeeDataService.ts file
*/
import { Component, inject } from '@angular/core';
import { EmployeeDataService } from '../employee-data-service';

@Component({
  selector: 'app-employee-display-component',
  imports: [],
  template: `
  <h1>This is my Employee Display Component</h1>
  <ul>
    @for (employee of employees; track $index) {
      <li>{{employee.name}} | Age: {{employee.age}}</li>
    }
  </ul>
  `,
  styleUrl: './employee-display-component.css',
})
export class EmployeeDisplayComponent {
  // This array will hold the data received from our Service
  public employees: Array<{id: number, name: string, age: number}> = []

  // The inject function is injecting the instance of EmployeeDataService
  // so that we can get employee data
  private employeeService = inject(EmployeeDataService);

  constructor() {
    // We call the getEmployees method on our service to populate our employees array
    this.employees = this.employeeService.getEmployees();
  }
}
