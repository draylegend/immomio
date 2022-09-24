import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: 'im-filter',
  styleUrls: ['./filter.component.scss'],
  templateUrl: './filter.component.html',
  imports: [MatInputModule, MatSelectModule],
})
export class FilterComponent {}
