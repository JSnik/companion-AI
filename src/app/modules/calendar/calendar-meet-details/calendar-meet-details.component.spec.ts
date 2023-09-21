import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMeetDetailsComponent } from './calendar-meet-details.component';

describe('CalendarMeetDetailsComponent', () => {
  let component: CalendarMeetDetailsComponent;
  let fixture: ComponentFixture<CalendarMeetDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarMeetDetailsComponent]
    });
    fixture = TestBed.createComponent(CalendarMeetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
