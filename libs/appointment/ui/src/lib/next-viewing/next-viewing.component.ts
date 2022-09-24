import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-next-viewing',
  standalone: true,
  styleUrls: ['./next-viewing.component.scss'],
  templateUrl: './next-viewing.component.html',
  imports: [MatIconModule],
})
export class NextViewingComponent {}
