import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: 'im-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent {}
