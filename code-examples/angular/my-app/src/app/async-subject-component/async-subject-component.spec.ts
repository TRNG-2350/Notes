import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSubjectComponent } from './async-subject-component';

describe('AsyncSubjectComponent', () => {
  let component: AsyncSubjectComponent;
  let fixture: ComponentFixture<AsyncSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncSubjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AsyncSubjectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
