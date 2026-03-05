import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectComponent } from './replay-subject-component';

describe('ReplaySubjectComponent', () => {
  let component: ReplaySubjectComponent;
  let fixture: ComponentFixture<ReplaySubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaySubjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReplaySubjectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
