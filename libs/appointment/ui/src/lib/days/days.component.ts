import { JsonPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-days[days]',
  standalone: true,
  styleUrls: ['./days.component.scss'],
  templateUrl: './days.component.html',
  imports: [NgForOf, JsonPipe],
})
export class DaysComponent {
  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  displayDays!: { date: number; day: number }[];

  @Input() set days(val: number[] | undefined) {
    const d = new Date();
    const firstDay = d.getDate() - d.getDay();

    this.displayDays = (val || []).map(day => ({ day, date: firstDay + day }));
  }
}
