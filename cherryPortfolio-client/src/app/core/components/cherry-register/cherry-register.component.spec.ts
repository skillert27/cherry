import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryRegisterComponent } from './cherry-register.component';

describe('CherryRegisterComponent', () => {
  let component: CherryRegisterComponent;
  let fixture: ComponentFixture<CherryRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CherryRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CherryRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
