import { JsonPipe, NgClass, NgForOf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'today',
  standalone: true,
})
export class TodayPipe implements PipeTransform {
  transform(date: Date): boolean {
    const d = new Date();

    return date.getDate() === d.getDate();
  }
}

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
