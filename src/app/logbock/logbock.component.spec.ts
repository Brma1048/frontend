import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbockComponent } from './logbock.component';

describe('LogbockComponent', () => {
  let component: LogbockComponent;
  let fixture: ComponentFixture<LogbockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogbockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
