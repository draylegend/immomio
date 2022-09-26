import { KeyValuePipe, NgForOf } from '@angular/common';
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
  selector: 'im-week-content[viewings]',
  standalone: true,
  styleUrls: ['./week-content.component.scss'],
  templateUrl: './week-content.component.html',
  imports: [
    NgForOf,
    ViewingsComponent,
    KeyValuePipe,
    PointerComponent,
    LetModule,
  ],
})
export class WeekContentComponent {
  @Input() viewings?: Viewings;

  @Output() showAppointment = new EventEmitter<string[]>();

  pointer$ = timer(0, 1000).pipe(
    map(() => {
      const d = new Date();

      return {
        time: `${d.getHours()}:${
          d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
        }`,
        y: ((d.getHours() * 60 + d.getMinutes()) * 100) / 60,
      };
    }),
  );
}
