import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteRoutingComponent } from './site-routing-component';

describe('SiteRoutingComponent', () => {
  let component: SiteRoutingComponent;
  let fixture: ComponentFixture<SiteRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteRoutingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteRoutingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
