import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-calendar-general-input',
  templateUrl: './calendar-general-input.component.html',
  styleUrls: ['./calendar-general-input.component.scss']
})
export class CalendarGeneralInputComponent {
  @Input() height: number;
  @Input() width: number;
  @Input() heightDef: number = 229;
}
