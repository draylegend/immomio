import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-week-content',
  standalone: true,
  styleUrls: ['./week-content.component.scss'],
  templateUrl: './week-content.component.html',
})
export class WeekContentComponent {}
