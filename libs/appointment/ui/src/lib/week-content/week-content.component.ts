import { KeyValuePipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Viewings } from '@immomio/appointment/domain';
import { ViewingsComponent } from '../viewings/viewings.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-week-content[viewings]',
  standalone: true,
  styleUrls: ['./week-content.component.scss'],
  templateUrl: './week-content.component.html',
  imports: [NgForOf, ViewingsComponent, KeyValuePipe],
})
export class WeekContentComponent {
  @Input() viewings?: Viewings;
}
