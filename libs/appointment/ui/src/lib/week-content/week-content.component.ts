import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppointmentObject } from '@immomio/appointment/api';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-week-content[appointments]',
  standalone: true,
  styleUrls: ['./week-content.component.scss'],
  templateUrl: './week-content.component.html',
  imports: [JsonPipe],
})
export class WeekContentComponent {
  @Input() appointments?: AppointmentObject[];
}
