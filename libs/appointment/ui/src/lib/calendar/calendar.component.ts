import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  imports: [MatDatepickerModule, MatNativeDateModule],
})
export class CalendarComponent {
  selected?: Date;
}
