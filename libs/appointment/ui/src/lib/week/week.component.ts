import { DatePipe, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Viewings } from '@immomio/appointment/domain';
import { DaysComponent } from '../days/days.component';
import { TimeComponent } from '../time/time.component';
import { WeekContentComponent } from '../week-content/week-content.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-week[workingDays][viewings][weekSpan][workingHours]',
  standalone: true,
  styleUrls: ['./week.component.scss'],
  templateUrl: './week.component.html',
  imports: [
    MatButtonModule,
    MatIconModule,
    WeekContentComponent,
    DaysComponent,
    TimeComponent,
    JsonPipe,
    DatePipe,
  ],
})
export class WeekComponent {
  @Input() workingDays?: Date[];

  @Input() viewings?: Viewings;

  @Input() weekSpan?: { start: Date; end: Date };

  @Input() workingHours?: string[];

  @Output() today = new EventEmitter();

  @Output() prev = new EventEmitter();

  @Output() next = new EventEmitter();

  @Output() showAppointment = new EventEmitter<string[]>();
}
