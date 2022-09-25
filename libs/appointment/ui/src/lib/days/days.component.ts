import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-days',
  standalone: true,
  templateUrl: './days.component.html',
})
export class DaysComponent {}
