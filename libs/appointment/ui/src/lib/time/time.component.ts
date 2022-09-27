import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-time[workingHours]',
  standalone: true,
  styleUrls: ['./time.component.scss'],
  templateUrl: './time.component.html',
  imports: [NgForOf],
})
export class TimeComponent {
  @Input() workingHours?: string[];
}
