import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryFooterComponent } from './cherry-footer.component';

describe('CherryFooterComponent', () => {
  let component: CherryFooterComponent;
  let fixture: ComponentFixture<CherryFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CherryFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CherryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
