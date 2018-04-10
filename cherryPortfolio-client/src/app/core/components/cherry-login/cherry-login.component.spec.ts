import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryLoginComponent } from './cherry-login.component';

describe('CherryLoginComponent', () => {
  let component: CherryLoginComponent;
  let fixture: ComponentFixture<CherryLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CherryLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CherryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
