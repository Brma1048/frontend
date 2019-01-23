import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLogbookComponent } from './update-logbook.component';

describe('UpdateLogbookComponent', () => {
  let component: UpdateLogbookComponent;
  let fixture: ComponentFixture<UpdateLogbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLogbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLogbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
