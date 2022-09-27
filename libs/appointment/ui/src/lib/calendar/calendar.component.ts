import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-calendar[selected]',
  standalone: true,
  templateUrl: './calendar.component.html',
  imports: [MatDatepickerModule, MatNativeDateModule, JsonPipe],
})
export class CalendarComponent {
  @Input() selected?: Date;

  @Output() dateChanges = new EventEmitter<Date>();
}
