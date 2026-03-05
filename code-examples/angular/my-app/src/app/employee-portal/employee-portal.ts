/**
 * Used as part of the HTTP client example
 */
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee-service';
import { Employee } from '../employee-model';

@Component({
  selector: 'app-employee-portal',
  imports: [FormsModule],
  templateUrl: './employee-portal.html',
  styleUrl: './employee-portal.css',
})
export class EmployeePortal {
  private employeeService = inject(EmployeeService);

  // Signals for state management
  employees = signal<Employee[]>([]);
  isLoading = signal<boolean>(false);
  errorMessage = signal<string>('');
  successMessage = signal<string>('');

  // Form fields
  newName: string = '';
  newAge: number | null = null;

  private subscription = new Subscription();

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.isLoading.set(true);
    this.errorMessage.set('');

    const sub = this.employeeService.getAll().subscribe({
      next: (data) => {
        this.employees.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Failed to load employees. Is json-server running?');
        this.isLoading.set(false);
      }
    });

    this.subscription.add(sub);
  }

  createEmployee() {
    if (!this.newName || !this.newAge) return;

    const newEmployee: Employee = {
      name: this.newName,
      age: this.newAge
    };

    const sub = this.employeeService.create(newEmployee).subscribe({
      next: (created) => {
        // Add the newly created employee to the signal array
        this.employees.update(list => [...list, created]);
        this.successMessage.set(`Employee ${created.name} added successfully!`);

        // Reset the form
        this.newName = '';
        this.newAge = null;

        // Clear success message after 3 seconds
        setTimeout(() => this.successMessage.set(''), 3000);
      },
      error: () => {
        this.errorMessage.set('Failed to create employee.');
      }
    });

    this.subscription.add(sub);
  }

  deleteEmployee(id: number) {
    const sub = this.employeeService.delete(id).subscribe({
      next: () => {
        // Remove deleted employee from the signal array
        this.employees.update(list => list.filter(e => e.id !== id));
        this.successMessage.set('Employee deleted successfully!');
        setTimeout(() => this.successMessage.set(''), 3000);
      },
      error: () => {
        this.errorMessage.set('Failed to delete employee.');
      }
    });

    this.subscription.add(sub);
  }

  // always remember to unsubscrib when deleted!
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
