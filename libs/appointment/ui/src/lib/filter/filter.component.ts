import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-filter',
  standalone: true,
  templateUrl: './filter.component.html',
})
export class FilterComponent {}
