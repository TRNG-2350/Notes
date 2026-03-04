import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleDirComponent } from './style-dir-component';

describe('StyleDirComponent', () => {
  let component: StyleDirComponent;
  let fixture: ComponentFixture<StyleDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleDirComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StyleDirComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
