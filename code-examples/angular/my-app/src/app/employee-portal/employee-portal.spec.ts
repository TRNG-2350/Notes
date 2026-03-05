import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePortal } from './employee-portal';

describe('EmployeePortal', () => {
  let component: EmployeePortal;
  let fixture: ComponentFixture<EmployeePortal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeePortal],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeePortal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
