import { JsonPipe, NgClass, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const now = () => new Date().getDate();

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-days[visibleDays]',
  standalone: true,
  styleUrls: ['./days.component.scss'],
  templateUrl: './days.component.html',
  imports: [NgForOf, JsonPipe, NgClass],
})
export class DaysComponent {
  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  now = now();

  @Input() visibleDays?: { day: number; date: number }[];
}
