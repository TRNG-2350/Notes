import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLoggerComponent } from './data-logger-component';

describe('DataLoggerComponent', () => {
  let component: DataLoggerComponent;
  let fixture: ComponentFixture<DataLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataLoggerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataLoggerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
