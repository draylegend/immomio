import { JsonPipe, NgClass, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodayPipe } from '@immomio/shared/ui';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-days[workingDays]',
  standalone: true,
  styleUrls: ['./days.component.scss'],
  templateUrl: './days.component.html',
  imports: [NgForOf, JsonPipe, NgClass, TodayPipe],
})
export class DaysComponent {
  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  time = new Date().getTime();

  @Input() workingDays?: Date[];
}
