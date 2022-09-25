import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-time',
  standalone: true,
  templateUrl: './time.component.html',
})
export class TimeComponent {}
