import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverButtonComponentComponent } from './hover-button-component.component';

describe('HoverButtonComponentComponent', () => {
  let component: HoverButtonComponentComponent;
  let fixture: ComponentFixture<HoverButtonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverButtonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
