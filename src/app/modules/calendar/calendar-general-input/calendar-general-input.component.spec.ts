import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarGeneralInputComponent } from './calendar-general-input.component';

describe('CalendarGeneralInputComponent', () => {
  let component: CalendarGeneralInputComponent;
  let fixture: ComponentFixture<CalendarGeneralInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarGeneralInputComponent]
    });
    fixture = TestBed.createComponent(CalendarGeneralInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
