import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMainComponent } from './mat-main.component';

describe('MatMainComponent', () => {
  let component: MatMainComponent;
  let fixture: ComponentFixture<MatMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
