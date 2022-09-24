import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-next-viewing',
  standalone: true,
  templateUrl: './next-viewing.component.html',
})
export class NextViewingComponent {}
