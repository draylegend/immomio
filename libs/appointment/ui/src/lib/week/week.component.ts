import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: 'im-week',
  templateUrl: './week.component.html',
})
export class WeekComponent {}
