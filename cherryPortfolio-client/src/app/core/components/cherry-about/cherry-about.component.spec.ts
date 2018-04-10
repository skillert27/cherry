import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryAboutComponent } from './cherry-about.component';

describe('CherryAboutComponent', () => {
  let component: CherryAboutComponent;
  let fixture: ComponentFixture<CherryAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CherryAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CherryAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
