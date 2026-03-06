import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest'; // not technically needed
import { Banner } from './banner';

describe('Banner', () => {
  let component : Banner;
  let fixture : ComponentFixture<Banner>;
  let h1 : HTMLElement;

  beforeEach( () => {
    fixture = TestBed.createComponent(Banner);
    component = fixture.componentInstance; // Instance of test component
    h1 = fixture.nativeElement.querySelector('h1'); // <h1> element in the template
  });

  /**
   * fixture.detectChanges() triggers Angular's change detection, which
   * evaluates bindings and renders the template. Without it, the DOM
   * stays empty. We then query the rendered <h1> and assert its text
   * matches the signal's initial value.
   */
  it('should render the default title from the signal', () => {
    fixture.detectChanges(); // triggers initial data binding

    expect(h1).toBeTruthy();
    expect(h1.textContent).toBe('Simple App');
  });

  /**
   * Signals are reactive: calling title.set() schedules a DOM update.
   * A second detectChanges() flushes that update so we can assert the
   * new value. This pattern (mutate → detectChanges → assert) is the
   * standard way to test any reactive state change in Angular.
   */
  it('should reflect an updated signal value in the template', () => {
    fixture.detectChanges(); // render initial state

    component.title.set('Updated Title');
    fixture.detectChanges(); // flush the signal update to the DOM

    expect(h1.textContent).toBe('Updated Title');
  });
});