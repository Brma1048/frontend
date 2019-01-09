import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UctripsDetailComponent } from './uctrips-detail.component';

describe('UctripsDetailComponent', () => {
  let component: UctripsDetailComponent;
  let fixture: ComponentFixture<UctripsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UctripsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UctripsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
