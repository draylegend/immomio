import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-week-content',
  standalone: true,
  templateUrl: './week-content.component.html',
})
export class WeekContentComponent {}
