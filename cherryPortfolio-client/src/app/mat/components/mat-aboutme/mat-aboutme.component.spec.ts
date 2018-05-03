import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAboutmeComponent } from './mat-aboutme.component';

describe('MatAboutmeComponent', () => {
  let component: MatAboutmeComponent;
  let fixture: ComponentFixture<MatAboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAboutmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
