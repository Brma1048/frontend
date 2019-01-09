import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UctripsComponent } from './uctrips.component';

describe('UctripsComponent', () => {
  let component: UctripsComponent;
  let fixture: ComponentFixture<UctripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UctripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UctripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
