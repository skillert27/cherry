import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryNavComponent } from './cherry-nav.component';

describe('CherryNavComponent', () => {
  let component: CherryNavComponent;
  let fixture: ComponentFixture<CherryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CherryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CherryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
