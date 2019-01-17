import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLogbookComponent } from './create-logbook.component';

describe('CreateLogbookComponent', () => {
  let component: CreateLogbookComponent;
  let fixture: ComponentFixture<CreateLogbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLogbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLogbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
