import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import {AppRoutingModule} from "../../app-routing.module";
import {RouterModule} from "@angular/router";
import { CalendarToolComponent } from './calendar-tool/calendar-tool.component';
import { CalendarCardComponent } from './calendar-card/calendar-card.component';

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
    CalendarCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CalendarModule { }
