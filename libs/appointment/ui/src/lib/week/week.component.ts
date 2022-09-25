import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WeekContentComponent } from '../week-content/week-content.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'im-week',
  standalone: true,
  styleUrls: ['./week.component.scss'],
  templateUrl: './week.component.html',
  imports: [MatButtonModule, MatIconModule, WeekContentComponent],
})
export class WeekComponent {}
