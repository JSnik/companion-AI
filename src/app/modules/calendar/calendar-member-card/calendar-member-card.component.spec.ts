import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMemberCardComponent } from './calendar-member-card.component';

describe('CalendarMemberCardComponent', () => {
  let component: CalendarMemberCardComponent;
  let fixture: ComponentFixture<CalendarMemberCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarMemberCardComponent]
    });
    fixture = TestBed.createComponent(CalendarMemberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
