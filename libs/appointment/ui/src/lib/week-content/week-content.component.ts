import { DatePipe, KeyValuePipe, NgForOf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Viewings } from '@immomio/appointment/domain';
import { LetModule } from '@ngrx/component';
import { map, timer } from 'rxjs';
import { PointerComponent } from '../pointer/pointer.component';
import { ViewingsComponent } from '../viewings/viewings.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-week-content[viewings][startWorkingHour]',
  standalone: true,
  styleUrls: ['./week-content.component.scss'],
  templateUrl: './week-content.component.html',
  imports: [
    NgForOf,
    ViewingsComponent,
    KeyValuePipe,
    PointerComponent,
    LetModule,
    DatePipe,
  ],
})
export class WeekContentComponent {
  @Input() viewings?: Viewings;

  /** Format: h:m */
  @Input() startWorkingHour?: string;

  @Output() showAppointment = new EventEmitter<string[]>();

  pointer$ = timer(0, 1000).pipe(
    map(() => {
      const date = new Date();
      const [h] = this.startWorkingHour?.split(':') || [];
      const startHour = date.getHours() - Number(h);

      return {
        date,
        y: ((startHour * 60 + date.getMinutes()) * 100) / 60,
      };
    }),
  );
}
