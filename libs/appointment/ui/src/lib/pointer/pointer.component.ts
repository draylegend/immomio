import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-pointer',
  standalone: true,
  styleUrls: ['./pointer.component.scss'],
  templateUrl: './pointer.component.html',
})
export class PointerComponent {}
