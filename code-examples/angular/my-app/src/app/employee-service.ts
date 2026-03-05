/**
 * Used as part of the HTTP client example
 */
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/employees';

  // Simple ID generation - this probably exists in your backend
  curr_id: number = 6;
  idGenerator() : number {
    return this.curr_id++;
  }

  // GET all employees
  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  // GET single employee by id
  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  // POST - create a new employee
  create(employee: Employee): Observable<Employee> {
    employee.id = this.idGenerator();
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  // PUT - update an existing employee
  update(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee);
  }

  // DELETE - remove an employee
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
