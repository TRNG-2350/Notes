import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectComponent } from './behavior-subject-component';

describe('BehaviorSubjectComponent', () => {
  let component: BehaviorSubjectComponent;
  let fixture: ComponentFixture<BehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorSubjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BehaviorSubjectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
