import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryMainComponent } from './cherry-main.component';

describe('CherryMainComponent', () => {
  let component: CherryMainComponent;
  let fixture: ComponentFixture<CherryMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CherryMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CherryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
