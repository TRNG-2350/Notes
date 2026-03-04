import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDirComponent } from './class-dir-component';

describe('ClassDirComponent', () => {
  let component: ClassDirComponent;
  let fixture: ComponentFixture<ClassDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassDirComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassDirComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
