import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryHeaderComponent } from './cherry-header.component';

describe('CherryHeaderComponent', () => {
  let component: CherryHeaderComponent;
  let fixture: ComponentFixture<CherryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CherryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CherryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
