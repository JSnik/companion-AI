import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMeetCardComponent } from './calendar-meet-card.component';

describe('CalendarMeetCardComponent', () => {
  let component: CalendarMeetCardComponent;
  let fixture: ComponentFixture<CalendarMeetCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarMeetCardComponent]
    });
    fixture = TestBed.createComponent(CalendarMeetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
