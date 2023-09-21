import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import {AppRoutingModule} from "../../app-routing.module";
import {RouterModule} from "@angular/router";
import { CalendarToolComponent } from './calendar-tool/calendar-tool.component';
import { CalendarCardComponent } from './calendar-card/calendar-card.component';
import { CalendarMeetDetailsComponent } from './calendar-meet-details/calendar-meet-details.component';
import { CalendarMemberCardComponent } from './calendar-member-card/calendar-member-card.component';
import { CalendarGeneralInputComponent } from './calendar-general-input/calendar-general-input.component';
import { CalendarMeetCardComponent } from './calendar-meet-card/calendar-meet-card.component';

const routes = [
  {
    path: '',
    component: CalendarComponent
  }
]
@NgModule({
  declarations: [
    CalendarComponent,
    CalendarToolComponent,
    CalendarCardComponent,
    CalendarMeetDetailsComponent,
    CalendarMemberCardComponent,
    CalendarGeneralInputComponent,
    CalendarMeetCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CalendarModule { }
