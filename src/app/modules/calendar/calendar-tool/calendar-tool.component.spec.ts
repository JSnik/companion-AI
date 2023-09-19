import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarToolComponent } from './calendar-tool.component';

describe('CalendarToolComponent', () => {
  let component: CalendarToolComponent;
  let fixture: ComponentFixture<CalendarToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarToolComponent]
    });
    fixture = TestBed.createComponent(CalendarToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
