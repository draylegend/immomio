import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Viewings } from '@immomio/appointment/domain';
import { DaysComponent } from '../days/days.component';
import { TimeComponent } from '../time/time.component';
import { WeekContentComponent } from '../week-content/week-content.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-week[days][viewings]',
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
  ],
})
export class WeekComponent {
  @Input() days?: number[];

  @Input() viewings?: Viewings;
}
